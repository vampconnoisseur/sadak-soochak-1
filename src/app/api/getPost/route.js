import Post from "../../../../models/Post";
import connectDB from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectDB();
    const response = await Post.find({});
    console.log(response);
    return NextResponse.json({ response });
}
