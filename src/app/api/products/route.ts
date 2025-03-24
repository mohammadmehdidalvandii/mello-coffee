import connectToDB from "@/config/db";
import ProductModel from '@/models/Product'
import path from "path";
import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectToDB();
        const formData = await req.formData();

        const name = formData.get("name")?.toString() 
        const main_description = formData.get("main_description")?.toString()
        const description = formData.get("description")?.toString()
        const price = formData.get("price")?.toString()
        const image = formData.get("image") as File
        const category = formData.get("category")?.toString()
        const explain = formData.get("explain")?.toString()
        const compound = formData.get("compound")?.toString()
        const bitterness = formData.get("bitterness")?.toString()
        const taste = formData.get("taste")?.toString()

        // Validate required fields
        if (!name || !category || !price || !image) {
            return Response.json(
                { message: "Please provide all required fields: name, category, price, and image" },
                { status: 400 }
            )
        }

        if (!image) {
            return Response.json(
                { message: "Image is required" },
                { status: 400 }
            )
        }

        // Generate Buffer Image
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const fileName = Date.now() + image.name
        const filePath = path.join(process.cwd(), "public/uploads", fileName)

        await writeFile(filePath, buffer)
    
        const product = await ProductModel.create({
            name,
            main_description,
            description,
            price,
            image: `/uploads/${fileName}`,
            category,
            explain,
            compound,
            bitterness,
            taste,
        })

        return Response.json(
            { message: "Created Product Successfully", data: product },
            { status: 201 }
        )

    } catch(err) {
        console.log("Error=>server=?" , err)
        return Response.json(
            { message: "Error Project Server =>", err },
            { status: 500 }
        )
    }
}



// export async function GET(){
//     connectToDB();
//     const products = await ProductModel.find();
//     return Response.json(
//         {message:"get allProduct " , products},
//         {status:200}
//     )

// }