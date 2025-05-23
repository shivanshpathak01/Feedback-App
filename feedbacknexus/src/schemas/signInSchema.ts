import { z } from 'zod';

// Here the identifier is just the email, or username whatever you want to say, its just a naming in production 
export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string(),
})