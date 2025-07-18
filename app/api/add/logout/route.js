import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true, message: "Logged out" });
    response.cookies.set({
      name: "token",
      value: "",
      maxAge: 0,
      path: "/"
    });

    return response;
  } catch {
    return NextResponse.json({ success: false, message: "Server issue" });
  }
}
