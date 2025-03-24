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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectToDB();
        const productID = params.id;
        const formData = await req.formData();

        const image = formData.get("image") as File;
        let imageUrl = "";

        if (image) {
            imageUrl = image.name;
        }

        const updateData = {
            name: formData.get("name")?.toString(),
            main_description: formData.get("main_description")?.toString(),
            description: formData.get("description")?.toString(),
            price: formData.get("price")?.toString(),
            image: imageUrl,
            category: formData.get("category")?.toString(),
            explain: formData.get("explain")?.toString(),
            compound: formData.get("compound")?.toString(),
            bitterness: formData.get("bitterness")?.toString(),
            taste: formData.get("taste")?.toString()
        };

        const product = await ProductModel.findByIdAndUpdate(
            productID,
            updateData,
            { new: true }
        );

        if (!product) {
            return Response.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json(
            { message: "Product updated successfully", product },
            { status: 200 }
        );

    } catch (err) {
        console.log("Error updating product:", err);
        return Response.json(
            { message: "Error updating product" },
            { status: 500 }
        );
    }
}
