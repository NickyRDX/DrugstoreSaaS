import {z} from 'zod'
export const loginSchema = z.object({
  email: z.email("Ingresar Email Valido").min(2).max(12),
  password: z.string("Ingresar Password").min(5, "Password debe tener al menos 5 caracteres")
})
export type LoginFormData = z.infer<typeof loginSchema>