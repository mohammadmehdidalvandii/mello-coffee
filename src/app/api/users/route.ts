import UserModel from '@/models/User';
import connectToDB from '@/config/db';
import { NextRequest } from 'next/server';

export async function GET(req:NextRequest ){
    connectToDB()
    const users = await UserModel.find();
    return Response.json(
        {message:"get all Users" , users},
        {status:200}
    )
}