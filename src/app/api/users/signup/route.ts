import connect from '@/dbconfig/dbconfig';
import User from "@/models/userModel";
import UserInfo from '@/models/userInfoModel';
import FirstClass from '@/models/firstYearMaterials';
import SecondClass from '@/models/secondYearMaterials';
import ThirdClass from '@/models/thirdYearMaterials';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
connect;
function getRandomInt() {
    return Math.floor(Math.random() * 100);
}
export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { username, email, password, role, ID } = reqBody;
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
        if (role === "student") {
            
        }
        else {
           // for role staff
        }
        // save in DB 
        const newUser = new User(
            {
                ID,
                username,
                email,
                password: hashPassword,
                role,
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