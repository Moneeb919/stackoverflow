"use server";

import User from "@/database/user.model";
import { connectedToDatabase } from "../mongoose";

export async function getUserById(params: any){
    try {
        connectedToDatabase();
        const { userId } = params;
        const user = await User.findById({ clerkId: userId });
        return user;
    } catch (error) {
        console.log(error);
    }
}