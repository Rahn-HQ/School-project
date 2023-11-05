import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
connect()
export const GET = async ( req : NextRequest ) => {
    const response = NextResponse.json(
        {
            message: "Login Successful",
            success: true,
        }
    );
    
    if( response.cookies.get("token") ){
        return response;
    }
    return NextResponse.json({
        message : "You are not allowed",
        success : false
    })
}