import User from "@/model/user";
import { dbConnect } from "@/lib/mongoose";
import bcrypt from 'bcrypt';

export async function POST(request) {
  const body = await request.json();
  await dbConnect();

  const existingUser = await User.findOne({ username: body.username });
  const existingEmail = await User.findOne({ emailID: body.emailID });

  if (existingUser) {
    return Response.json({ success: false, message: 'Username already exists!' });
  }
  if (existingEmail) {
    return Response.json({ success: false, message: 'EmailID already exists!' });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = new User({
      username: body.username,
      emailID: body.emailID,
      password: hashedPassword,
      role: body.role,
    });

    await newUser.save();

    return new Response(JSON.stringify({ success: true, message: "Sign-up successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error(err.message);
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
