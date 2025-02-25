import mongoose from "mongoose";


// ? denotes that this value is optional to get, either we will be having either not
type ConnectionObject = {
    isConnected?: number 
}

const connection : ConnectionObject = {}

// here void means it do not care of which type of data getting out, its not of the c++
async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to Database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Successfully");
        

    } catch (error) {
        
        console.log("Database Connection failed!", error);
        
        process.exit(1)
    }
}

export default dbConnect;