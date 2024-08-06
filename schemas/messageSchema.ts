import {z} from 'zod'

export const MessageSchema = z.object({
    content : z.string().min(1,('content must be 1 character'))
    .max(1000,('content must be 1000 characters or less'))
})