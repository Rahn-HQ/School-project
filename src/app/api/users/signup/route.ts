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
        const { username, email, password, role, ID, year, classNum, staffPassword } = reqBody;
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
            if (year !== '7' && year !== '8' && year !== '9') {
                return NextResponse.json({
                    error: "Invalid Student_ID"
                },
                    {
                        status: 400
                    }
                )
            }
            const info = await UserInfo.findOne({ ID });
            if (info) {
                return NextResponse.json({
                    error: "Sudent_ID already exists"
                },
                    {
                        status: 400
                    }
                )
            }
            const newUser = new UserInfo(
                {
                    ID,
                    year,
                    classNum,
                }
            );
            const savedUser = await newUser.save();
            if ( year === '7' ){
                const newUser = new FirstClass(
                    {
                        ID,
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
            if ( year === '8' ){
                const newUser = new SecondClass(
                    {
                        ID,
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
            if ( year === '9' ){
                const newUser = new ThirdClass(
                    {
                        ID,
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