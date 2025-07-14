import { dbConnect } from "@/lib/mongoose";
import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request) {
    const { username, email, newPassword } = await request.json();
    
    await dbConnect();

    const user = await User.findOne({ username: username, emailID: email });

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "User not found or email doesn't match.",
        }, { status: 404 });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({
        success: true,
        message: "Password reset",
    });
}
