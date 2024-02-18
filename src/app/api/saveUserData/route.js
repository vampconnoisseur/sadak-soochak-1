import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, location } = await req.json();
    console.log("vghbnjkm", name, location,);
    return NextResponse.json({ name, location });
}