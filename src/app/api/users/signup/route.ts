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
function getRandomClass() {
    return Math.floor(Math.random() * 3)%3 + 7;
}
export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { username, email, password, role } = reqBody;
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
        if ( role === "student") {
            const year = getRandomClass();
            if ( year === 7 ){
                const newUser = new FirstClass(
                    {
                        Math : getRandomInt(),
                        Physics:getRandomInt(),
                        English:getRandomInt(),
                        Science:getRandomInt(),
                        French :getRandomInt(),
                        History:getRandomInt(),
                    }
                );
                const savedUser = await newUser.save();
            }
            if ( year === 8 ){
                const newUser = new SecondClass(
                    {
                        Math : getRandomInt(),
                        Physics:getRandomInt(),
                        English:getRandomInt(),
                        Science:getRandomInt(),
                        Arabic :getRandomInt(),
                        History:getRandomInt(),
                    }
                );
                const savedUser = await newUser.save();
            }
            if ( year === 9 ){
                const newUser = new ThirdClass(
                    {
                        Analysis : getRandomInt(),
                        Physics:getRandomInt(),
                        English:getRandomInt(),
                        Science:getRandomInt(),
                        Arabic :getRandomInt(),
                        Algebra:getRandomInt(),
                    }
                );
                const savedUser = await newUser.save();
            }
        }
        else {
            
        }
        // save in DB 
        const newUser = new User(
            {
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