import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from 'zod'
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
    username:usernameValidation
})

export async function GET(request: Request){
    await dbConnect()

    try {
        // 11:00
        const {searchParams} = new URL(request.url)
    } catch (error) {
        console.error("Error Checking username", error)
        return Response.json(
            {
                success: false,
                message: "Error checking username"
            },
            {status : 500}
        )
    }
}
