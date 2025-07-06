import { NextResponse } from "next/server";
import User from "@/model/user";
import { dbConnect } from "@/lib/mongoose";

export async function POST(request) {
    const body = await request.json();
    await dbConnect();

    const newUser = new User({
          trainName: body.trainName,
          trainNumber: body.trainNumber,
          from: body.from,
          to: body.to,
          name: body.name,
          age: body.age,
          gender: body.gender,
          date: body.date,
        });
        try{
            await newUser.save();
            return NextResponse.json({success: true});
        }catch{
             return NextResponse.json({success: false});
        }
        


}