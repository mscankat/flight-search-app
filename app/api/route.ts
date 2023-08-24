import { NextResponse } from "next/server";
import airports from "@/public/airports.json";
export async function POST(request: Request) {
  const body = await request.json();
  let result: any[] = [];
  airports.forEach((x) => {
    if (x.code.startsWith(body.query)) {
      result.push(x);
    }
  });
  console.log(result);
  //   console.log(JSON.stringify(airports));
  return NextResponse.json(result);
}
