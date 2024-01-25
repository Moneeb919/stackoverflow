import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectedToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL){
        return console.log("Mongodb is already connected");
    }

    if (isConnected){
        return console.log("MongoDB is already connected");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'DEVFLOW'
        })

        isConnected = true;

        console.log("MONGODB is connected");
    } catch (error) {
        console.log('Mongodb connection failed', error);
    }
}