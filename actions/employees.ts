"use server"

import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server"

export async function createEmployee(formData: FormData){
  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser()
  const owner = await prisma.user.findUnique({
    where: {
      id: user?.id,
    }
  })
  if(owner?.rol !== 'OWNER'){
    return {error: 'You are not authorized to create employees'}
  }
  const email = formData.get('email') as string;
  const nombre = formData.get('nombre') as string
  const password = formData.get('password') as string
  console.log(nombre)
  const {data, error} = await supabase.auth.signUp({email, password})
  if(error){
    return {error: error.message}
    console.error(error, 'Error creating employee')
  }
  await prisma.user.create({
    data: {
      id: data.user!.id,
      email,
      nombre,
      rol: 'EMPLOYEE',
      tiendaId: owner.tiendaId,
    }
  })
}