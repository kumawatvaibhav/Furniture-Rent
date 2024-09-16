import {z} from "zod"

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string(),
})

