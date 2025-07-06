import User from "@/model/user";
import { dbConnect } from "@/lib/mongoose";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";


const JWT_SECRET = process.env.JWT_SECRET || "SuperSecret";

export async function POST(request) {
    const body = await request.json();
    await dbConnect();
    const token = cookies().get("token")?.value;
    if (!token) {
        return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
    }

    let decode;
    try {
        decode = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return NextResponse.json({ success: false, message: "Invalid or token expired" }, { status: 401 });
    }

    const doc = await User.findOne({ username: decode.username });

    return NextResponse.json({ success: true, username: doc.username, mobile: doc.mobile, emailID: doc.emailID });
}

export async function PUT(request) {
    const body = await request.json();
    await dbConnect();

    const token = cookies().get("token")?.value;
    if (!token) {
        return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
    }

    let decode;
    try {
        decode = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return NextResponse.json({ success: false, message: "Invalid or token expired" }, { status: 401 });
    }

    const updatedUser = await User.findOneAndUpdate(
        { username: decode.username },
        { emailID: body.emailID, mobile: body.mobile },
        { new: true }
    );

    return NextResponse.json({ success: true, message: 'Update successful' });

}

