import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import startDB from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
interface NewUserRequest {
    email: string,
    password: string,
};
interface NewUserResponse {
    id: string,
    username: string,
    email: string,
    role: string
}
type NewResponse = NextResponse<{ user?: NewUserResponse, error?: string }>;
export const POST = async (req: Request): Promise<NewResponse> => {
    try {
        await startDB;
        const body = (await req.json()) as NewUserRequest;
        const { email, password } = body;
        console.log(body);
        //check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            console.log("Email does not exist please sign up");
            return NextResponse.json({ error: "Email does not exist please sign up if you do not have an account or try again" }, { status: 400 })
        }
        console.log("user exists");

        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            console.log("Invalid password");
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }
        console.log(user);
        //create token data
        const tokenData = {
            username: user.username,
            email: user.email,
            role: user.role
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

        const response = NextResponse.json({
           user : {
            id: user.id as string,
            username: user.username,
            email: user.email,
            role: user.role
            }
          }
        )
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}