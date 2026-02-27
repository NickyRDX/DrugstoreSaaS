import {z} from 'zod'
export const loginSchema = z.object({
  email: z.email("Ingresar Email Valido"),
  password: z.string("Ingresar Password").min(5, "Password debe tener al menos 5 caracteres")
})
export type LoginFormData = z.infer<typeof loginSchema>


export const registerSchema = z.object({
  nombre: z.string('Ingresar Nombre').min(1, 'Nombre es requerido'),
  email: z.email('Ingresar Email Valido'),
  password: z.string('Ingresar Password').min(5, 'Password debe tener al menos 5 caracteres'),
})
export type RegisterFormData = z.infer<typeof registerSchema>