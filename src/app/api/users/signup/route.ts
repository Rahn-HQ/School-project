
import { connect } from '@/dbconfig/dbconfig';
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
    try {
        console.log("")
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        //check if email is already exist 
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                error: "Email already exists"
            },
                {
                    status: 400
                }
            )
        }
        
        //check if user is already exist 
        const user1 = await User.findOne({ username });
        if (user1) {
            return NextResponse.json({
                error: "user already exists"
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