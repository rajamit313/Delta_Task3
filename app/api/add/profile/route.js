import User from "@/model/user";
import { dbConnect } from "@/lib/mongoose";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "SuperSecret";

export async function GET(request) {
  await dbConnect();
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
  }

  let decode;
  try {
    decode = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 401 });
  }

  const doc = await User.findOne({ username: decode.username });

  if (!doc) {
    return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    username: doc.username,
    mobile: doc.mobile,
    emailID: doc.emailID,
    profilepic: doc.profilepic,
    coins: doc.coins
  });
}

export async function PUT(request) {
  const body = await request.json();
  await dbConnect();

  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
  }

  let decode;
  try {
    decode = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 401 });
  }

  const updatedUser = await User.findOneAndUpdate(
    { username: decode.username },
    {
      emailID: body.emailID,
      mobile: body.mobile,
      profilepic: body.profilePic,
    },
    { new: true }
  );

  if (!updatedUser) {
    return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Update successful" });
}
