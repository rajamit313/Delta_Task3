import Concert from "@/model/concert";
import { dbConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  await dbConnect();

  const doc = await Concert.find({
    city: body.city
  });

  if (doc.length === 0) {
    return NextResponse.json({ success: false, message: "No concerts found in this city" });
  }

  return NextResponse.json({ success: true, list: doc });
}
