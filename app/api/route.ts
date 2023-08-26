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
      x.city.toLowerCase().startsWith(query) ||
      x.name.toLowerCase().startsWith(query) ||
      x.state?.toLowerCase().startsWith(query)
    ) {
      result.push(x);

      if (result.length >= 6) {
        break;
      }
    }
  }

  return NextResponse.json(result);
}
