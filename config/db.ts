import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectToDB = async ()=>{
    try{
       if(mongoose.connections[0].readyState){
        return true
       } else{
        const connectionString = process.env.CONNECTION
        if (!connectionString) {
            throw new Error('CONNECTION environment variable is not defined')
        }
        await mongoose.connect(connectionString)
        console.log("DB Connected Successfully")
       }
    } catch(error){
        console.log("DB Connections Has Error =>" , error)
    }
}

export default connectToDB