import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { NextRequest } from "next/server";

export async function DELETE(req:NextRequest , {params}){
    try{
        await connectToDB();
        const userID = params.id;
        
        console.log("userID =>" ,userID)

        if(!userID){
            return Response.json(
                {message:"ID not Found"},
                {status:404}
            )
        };

 
        await UserModel.findOneAndDelete({_id:userID});
        return Response.json(
            {message:"Removed User is Success"},
            {status:200}
        );

    } catch(error){
        return Response.json(
            {message:"Error server Delete ID User"},
            {status:500}
        )
    }
}