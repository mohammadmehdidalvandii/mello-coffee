import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { NextRequest } from "next/server";

export async function PUT (req:NextRequest){
    try{
        await connectToDB();
        const {id} = await req.json();
        const user = await UserModel.findOne({_id:id}).lean();
        await UserModel.findOneAndUpdate(
            {_id:id},
            {
                $set:{
                    role: user.role === "USER" ? "ADMIN" :"USER",
                }
            }
        )
    } catch(err){
        console.log("Error =>" , err)
        return Response.json(
            {message:"Error server =>" ,err},
            {status:500}
        )
    }
}