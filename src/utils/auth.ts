import { hash , compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const hashPassword = async (password:string )=>{
    const hashedPassword = await hash(password ,12);
    return hashedPassword
};

const verifyPassword = async (password:string , hashedPassword:string)=>{
    const isValid = await compare(password ,hashedPassword)
    return isValid
}

const generateAccessToken = (data: object)=>{
    const accessToken = process.env.ACCESS_TOKEN
    if (!accessToken) {
        throw new Error('ACCESS_TOKEN is not defined in environment variables')
    }
    const token = sign(data, accessToken, { expiresIn: '1h' });
    return token
}

const verifyAccessToken = (token: string)=>{
    const accessToken = process.env.ACCESS_TOKEN
    if (!accessToken) {
        throw new Error('ACCESS_TOKEN is not defined in environment variables')
    }
    try{
        const tokenPayload = verify(token, accessToken)
        return tokenPayload
    } catch(err){
        console.log("Verify Access token Error =>" ,err);
        return false
    }
}

const generateRefreshToken = (data: object)=>{
    const refreshToken = process.env.REFRESH_TOKEN
    if (!refreshToken) {
        throw new Error('REFRESH_TOKEN is not defined in environment variables')
    }
    const token = sign(data, refreshToken, { expiresIn: '7d' });
    return token
}

const verifyRefreshToken = (token: string)=>{
    const refreshToken = process.env.REFRESH_TOKEN
    if (!refreshToken) {
        throw new Error('REFRESH_TOKEN is not defined in environment variables')
    }
    try{
        const tokenPayload = verify(token, refreshToken)
        return tokenPayload
    } catch(err){
        console.log("Verify Refresh token Error =>" ,err);
        return false
    }
}

const validationEmail = (email:string)=>{
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email)
}

const validationPhone = (phone:string)=>{
    const pattern = /^09\d{9}$/;
    return pattern.test(phone)
}

const validationPassword = (password:string)=>{
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    return pattern.test(password)
}

export{
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    validationEmail,
    validationPhone,
    validationPassword,
}