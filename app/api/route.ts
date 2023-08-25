import { NextResponse } from "next/server";
import airports from "@/public/airports.json";
interface IReq {
  query: string;
}
export async function POST(request: Request) {
  const body: IReq = await request.json();
  const query = body.query.toLowerCase();
  let result: any[] = [];
  for (const x of airports) {
    if (
      x.code.toLowerCase().startsWith(query) ||
      x.name.toLowerCase().includes(query) ||
      x.city.toLowerCase().includes(query)
    ) {
      result.push(x);

      if (result.length >= 10) {
        break;
      }
    }
  }

  console.log(result);
  return NextResponse.json(result);
}
