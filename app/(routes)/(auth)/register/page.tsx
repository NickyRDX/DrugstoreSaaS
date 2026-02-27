"use client";
import { Button } from "@/components/ui/button";
import {register} from '@/actions/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  registerSchema,
  type RegisterFormData,
} from "@/shared/components/form.data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
export default function RegisterPage() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: RegisterFormData) {
    const formDate = new FormData()
    formDate.append('nombre', data.nombre)
    formDate.append('email', data.email) 
    formDate.append('password', data.password)
    const resultado = await register(formDate)
    if(resultado?.error){
      console.log(resultado.error)
    }
  }
  return (
    <Card className="w-full max-w-md shadow-lg border-0 h-full dark:border-accent dark:border-3 dark:border-solid">
      <CardHeader className="mb-4">
        <CardTitle className="text-center text-2xl font-bold tracking-wide">
          ¡Registrate Aqui!
        </CardTitle>
        <CardDescription>
          Bienvenido/a a NexusManager, SaaS para los Drugstores.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full w-full flex flex-col gap-y-4"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel className="mb-2 tracking-wide text-base">
                    Nombre Completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-blue-300/50 focus-visible:border-blue-400 ring-2 ring-blue-300/60 w-full text-slate-600 dark:text-white h-12"
                      placeholder="Nombre y Apellido"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel className="mb-2 tracking-wide text-base">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-blue-300/50 focus-visible:border-blue-400 ring-2 ring-blue-300/60 w-full text-slate-600 dark:text-white h-12"
                      placeholder="example@hotmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel className="mb-2 tracking-wide text-base">
                    Contraseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-blue-300/50 focus-visible:border-blue-400 ring-2 ring-blue-300/60 w-full text-slate-600 dark:text-white h-12"
                      placeholder="Ingresa tu contraseña"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full cursor-pointer p-6 mt-6" type="submit">
              Registrarse
            </Button>
            <Button
              variant="secondary"
              className="w-full p-6 mt-0 cursor-pointer"
              asChild
            >
              <Link href={`/login`}>Iniciar Sesion</Link>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
