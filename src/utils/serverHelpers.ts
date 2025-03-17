import { cookies } from "next/headers";
import connectToDB from "../../config/db";
import userModel from '../../models/User'
import { verifyAccessToken } from "./auth";

interface TokenPayload {
  email: string;
  [key: string]: any;
}

interface UserDocument {
  _id: any;
  name: string;
  email: string;
  phone: string;
  password?: string;
  refreshToken?: string;
  [key: string]: any;
}

const authUser = async () => {
  try {
    await connectToDB();

    const token = cookies().get("token");
    let user = null;

    if (token) {
      const tokenPayload = verifyAccessToken(token.value) as TokenPayload | false;
      
      if (tokenPayload && tokenPayload.email) {
        user = await userModel.findOne({ email: tokenPayload.email }).lean() as UserDocument | null;
        
        if (user) {
          // Remove sensitive information
          const { password, refreshToken, ...safeUser } = user;
          return safeUser;
        }
      }
    }

    return null;
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
}

export { authUser }