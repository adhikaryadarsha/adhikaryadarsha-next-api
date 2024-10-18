import { user } from "@/util/db";
import { NextResponse } from "next/server";

// GET api

export function GET (request, content) {
  console.log(content);
  const data =  user;
  return NextResponse.json(data,{status : 200})

}

// POST api
export async function POST(request)
{ 
  let payload = await request.json();
  console.log(payload);
  return NextResponse.json({result:'hello'},{status:200})
}