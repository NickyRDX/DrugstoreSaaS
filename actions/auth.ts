"use server"
import { prisma } from '@/lib/prisma'
import {createClient} from '@/lib/supabase/server'
import {redirect} from 'next/navigation'

export async function login(formData: FormData){
  const supabase = await createClient()
  const {error} = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })
  if(error){
    return{ error: error.message}
  }
  redirect("/dashboard")
}
export async function register(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nombre = formData.get("nombre") as string;

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return { error: error.message };
  }

  const tienda = await prisma.tienda.create({
    data: { nombre: `Tienda de ${nombre}` },
  });

  await prisma.user.create({
    data: {
      id: data.user!.id,
      email,
      nombre,
      rol: "OWNER",
      tiendaId: tienda.id, // ahora sí existe
    },
  });

  redirect("/dashboard");
}
export async function logout(){
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/login")
}