import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import User from "@/model/user";
import { dbConnect } from "@/lib/mongoose";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

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
    if (!doc) {
        return NextResponse.json({ success: false, message: "Invalid user!", status: 401 });
    }
    console.log("Current:", body.currentPassword);
console.log("Doc Password:", doc.password);
    const match = await bcrypt.compare(body.currentpassword, doc.password);
    

    if (!match) {
        return NextResponse.json({ success: false, message: "Current password is incorrect" }, { status: 403 });
    }

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(body.newPassword, salt);

    doc.password = newPassword;
    await doc.save();

    return NextResponse.json({ success: true, message: "Password changed!" });
}