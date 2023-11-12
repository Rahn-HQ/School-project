import { NextResponse } from "next/server";
import startDB   from "@/dbconfig/dbconfig";
import UserModel from "@/models/userModel";
startDB;
interface NewUserRequest {
    username: string,
    email: string,
    password: string,
    role : string,
};
interface NewUserResponse {
    id: string,
    username: string,
    email: string,
    role: string
}
type NewResponse = NextResponse<{ user?: NewUserResponse, error?: string }>;
export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewUserRequest;
    const oldEmail = await UserModel.findOne({email : body.email });
    if ( oldEmail ){
        console.log("Email already exists");
        return NextResponse.json(
          {error : "email is already exist!"},
          {status : 422 }
        );
    }
    const oldUser = await UserModel.findOne({user : body.username });
    if ( oldUser ){
        console.log("Username already exists");
        return NextResponse.json(
          {error : "Username is already exist!"},
          {status : 422 }
        );
    }
    // create new user
    const user = await UserModel.create( {...body} );
    return NextResponse.json({
        user : {
            id : user._id.toString(),
            email : user.email,
            username : user.username,
            role : user.role,
        },
    })
};