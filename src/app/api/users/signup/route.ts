
import { connect } from '@/dbconfig/dbconfig';
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        //check if username is already exist 
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                error: "User already exists"
            },
                {
                    status: 400
                }
            )
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        // save in DB 
        const newUser = new User(
            {
                username,
                email,
                password: hashPassword,
            }
        );
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json(
            {
                message: "User created successfully",
                success: true,
                savedUser
            }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 });
    }
}