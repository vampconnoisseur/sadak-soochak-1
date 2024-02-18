import { NextResponse } from "next/server";
import connectDB from "@/lib/database";

export async function POST(req) {
    await connectDB();
    const { previousImageUrl } = await req.json();
    console.log(previousImageUrl);
    return NextResponse.json({ previousImageUrl, resultImageUrl: "https://shorturl.at/bKN47" });
}

