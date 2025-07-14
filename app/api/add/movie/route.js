import Movie from "@/model/movie";
import { dbConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    const body = await request.json();

    const doc = await Movie.find({
        city: body.city
    });
    console.log(doc);

    if (doc.length === 0) {
        return NextResponse.json({ success: false, message: "No movies found in this city" });
    }

    return NextResponse.json({ success: true, movies: doc });

}
