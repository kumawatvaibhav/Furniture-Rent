import {z} from 'zod'

export const UserNameValidation = z
       .string()
       .min(3, {message: 'Username must be at least 3 characters long.'})
       .max(20, {message: 'Username must be at most 20 characters long.'})
       .regex(/^[a-zA-Z0-9_]+$/,"User name must not contain special character")


export const SignUpSchema = z.object({
    username: UserNameValidation,
    email: z.string().email({message:'Invalid email address'}),
    password: z.string().min(8, {message: 'Password must be at least 8 character'})
})