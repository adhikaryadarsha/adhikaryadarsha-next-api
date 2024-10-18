import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
        return NextResponse.json({ result: true });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return NextResponse.json({ result: false, error: error.message });
    }
}
