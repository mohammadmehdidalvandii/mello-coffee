import connectToDB from "@/config/db";
import ProductModel from '@/models/Product';
import { NextRequest } from "next/server";

export async function DELETE(req:NextRequest, {params}){
    try{
        await connectToDB();
        const productID = params.id

        await ProductModel.findOneAndDelete(productID);
        return Response.json(
            {message:"Product Removed successfully"},
            {status:200}
        )

    }catch(error){
        return Response.json(
            {message:"Error for Delete Product"},
            {status:500}
        )
    }
}