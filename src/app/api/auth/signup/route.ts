import connectToDB from "@/config/db";
import userModel from '@/models/User'
import { generateAccessToken , hashPassword , validationEmail ,validationPhone ,validationPassword} from "@/utils/auth";
import { roles } from "@/utils/roles";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await connectToDB();

    const formData = await req.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const phone = formData.get("phone")?.toString();

    if(!name || !email || !password || !phone){
        return Response.json(
            {message:"All fields are mandatory."},
            {status:400}
        )
    };

    if(!validationEmail(email)){
        return Response.json(
            {message:"Email Is Not valid"},
            {status:400}
        )
    };

    if(!validationPhone(phone)){
        return Response.json(
            {message:"Phone Is Not valid"},
            {status:400}
        )
    };

    if(!validationPassword(password)){
        return Response.json(
            {message:"Password Is Not valid"},
            {status:400}
        )
    }

    const existingUser = await userModel.findOne({email});
    if(existingUser){
        return Response.json(
            {message:"This email already exists."},
            {status:400}
        )
    };

    const hashedPassword = await hashPassword(password);
    const token  = generateAccessToken({name});


    const users = await userModel.find({});

    await userModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role: users.length > 0 ? roles.USER : roles.ADMIN
    });

    return Response.json(
        {message:"User Register Successfully"},
        {
            status:201,
            headers:{"Set-cookie" : `token=${token};path=/;httpOnly=true`}
        }
    )
}