import connect  from '@/dbconfig/dbconfig';
import User from "@/models/userModel";
import  UserInfo  from '@/models/userInfoModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
connect;

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { username, email, password , role , ID , year  ,  classNum , staffPassword } = reqBody;
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
        if ( role === "student"){ 
        if ( year !== '7' && year !== '8' && year !== '9' ){
            return NextResponse.json({
                error: "Invalid Student_ID"
            },
                {
                    status: 400
                }
            )
        }
         const info = await UserInfo.findOne({ ID });
         if ( info ){
            return NextResponse.json({
                error: "Sudent_ID already exists"
            },
                {
                    status: 400
                }
            )
         }
         console.log("Hoooo")
         const newUser = new UserInfo(
            {
                ID,
                year ,
                classNum ,
            }
        );
        const savedUser = await newUser.save();
        console.log(savedUser);
        }
        else{

        }
        // save in DB 
        const newUser = new User(
            {
                username,
                email,
                password: hashPassword,
                role ,
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