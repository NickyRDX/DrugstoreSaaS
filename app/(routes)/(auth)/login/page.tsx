"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/auth";
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
import { loginSchema, type LoginFormData } from "@/shared/components/form.data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
export default function LoginPage() {
  const [loading,setLoading] = useState<boolean>(false)
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: LoginFormData) {
    setLoading(true)
    const formDate = new FormData();
    formDate.append("email", data.email);
    formDate.append("password", data.password);
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const resultado = await login(formDate);
    if (resultado?.error) {
      console.log(resultado.error);
    }
    setLoading(false)
  }
  return (
    <Card className="w-full max-w-md shadow-lg border-slate-950/10 border h-full dark:border-accent dark:border-2 dark:border-solid">
      {/* w-full: en móvil ocupa todo el ancho disponible (menos el p-4 del layout) */}
      {/* max-w-md: en PC no pasará de ~448px, el tamaño ideal para un login */}
      <CardHeader className="mb-4">
        <CardTitle className="text-center text-2xl font-bold">
          Iniciar Sesion
        </CardTitle>
        <CardDescription>
          Bienvenido/a a NexusManager, SaaS para los Drugstores.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="h-full w-full flex flex-col gap-y-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel className="mb-2 tracking-wide text-base leading-tight">
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
                  <FormLabel className="mb-2 tracking-wide text-base leading-tight">
                    Contraseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-blue-300/50 focus-visible:border-blue-400 ring-2 ring-blue-300/60 w-full text-slate-600 dark:text-white h-12"
                      placeholder="ingresa tu contraseña"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button disabled={form.formState.isSubmitting || loading} className="w-full cursor-pointer p-6 mt-6" type="submit">
              {loading ? (
                <Spinner className='size-5' />
              ):(
                <>
                Iniciar Sesion
                <ArrowRight className='flex items-center size-5'/>
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
