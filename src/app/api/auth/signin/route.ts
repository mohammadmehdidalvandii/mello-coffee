import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { generateAccessToken, generateRefreshToken  , validationEmail ,verifyPassword ,validationPassword} from "@/utils/auth";
import {   NextRequest} from "next/server";

export async function POST (req:NextRequest){
    try {
        await connectToDB();

        const formData = await req.formData();

        const email = formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";

        if(!email || !password){
            return Response.json(
                {message:"All fields are mandatory"},
                {status:400}
            )
        }

        if(!validationEmail(email)){
            return Response.json(
                {message:"Email is Not Valid"},
                {status:400}
            )
        };
        if(!validationPassword(password)){
            return Response.json(
                {message:"Password Is Not Valid"},
                {status:400}
            )
        };

        const user  = await  UserModel.findOne({email});

        if(!user){
            return Response.json(
                {message: "User Not Found"},
                {status:422}
            )
        }

        const isCorrectPassword = verifyPassword(password , user.password);
        if(!isCorrectPassword){
            return Response.json(
                {message:"Email Or Password Is Not Correct "},
                {status: 401}
            )
        }

        const accessToken  = generateAccessToken(
            {
                email,
                roles:user.role
            }
        );

        const refreshToken = generateRefreshToken(
            {
                email ,
                roles:user.role
            }
        )

        await UserModel.findOneAndUpdate(
            {email},
            {$set:{refreshToken}}
        )

        return Response.json(
            {message:"User Login Successfully"},
            {
                status:200,
                headers:{"Set-Cookie":`token=${accessToken};path=/;httpOnly=true;`}
            }
        )

    } catch(error){
        return Response.json(
            {message:"Error handling server =>" , error},
            {status:500}
        )
    }
}