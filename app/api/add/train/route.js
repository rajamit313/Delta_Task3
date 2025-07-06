import Train from "@/model/train";
import { dbConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    await dbConnect();

    let fromIndex;
    let toIndex;
    const doc = await Train.find({
        runs_on: body.dayName,
        "stations.name": { $all: [body.from, body.to] }
    });

    const list = doc.filter(train=>{
        fromIndex = train.stations.findIndex(s=>s.name === body.from);
        toIndex = train.stations.findIndex(s=>s.name === body.to);

        return (toIndex > fromIndex);
    });
    if(list.length == 0) return NextResponse.json({success: false, message: "No train available"});
    return NextResponse.json({success: true, list: list, fromIndex, toIndex});
}