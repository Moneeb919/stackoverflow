"use server";

import { connectedToDatabase } from "../mongoose";

export async function createQuestion(params: any){
    try {
        connectedToDatabase();
    } catch (error) {
        
    }
}