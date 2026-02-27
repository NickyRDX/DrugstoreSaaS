'use client'
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useForm } from 'react-hook-form';
export default function LoginPage() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email: "",
      password: "",
    },
  })
  function onSubmit(data: LoginFormData){
    console.log(data)
  }
  return (
    <Card className="w-full max-w-md shadow-lg border-0">
      {/* w-full: en móvil ocupa todo el ancho disponible (menos el p-4 del layout) */}
      {/* max-w-md: en PC no pasará de ~448px, el tamaño ideal para un login */}
      <CardHeader>
        <CardTitle>Iniciar Sesion</CardTitle>
        <CardDescription>
          Bienvenido/a a NexusManager, SaaS para los Drugstores.
        </CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  );
}
