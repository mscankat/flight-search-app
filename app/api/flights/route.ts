import { NextResponse } from "next/server";
import airports from "@/public/airports.json";
import flights from "@/public/MOCK_DATA.json";
interface IReq {
  origin: string;
  arrival: string;
  departureDate: string;
}
export async function POST(request: Request) {
  const body: IReq = await request.json();
  const origin = body.origin;
  const arrival = body.arrival;
  const departureDate = body.departureDate;
  let result: any[] = [];
  for (const x of flights) {
    if (x.departure_airport === origin && x.arrival_airport === arrival) {
      console.log(x.departure_date.toString());
      console.log(departureDate);
      console.log(new Date(x.departure_date.toString()));
      console.log(new Date(departureDate));

      if (x.departure_date.toString() === departureDate) {
        result.push({ onTime: true, x });
      } else {
        result.push({ onTime: false, x });
      }
    }
  }

  console.log(result);
  return NextResponse.json(result);
}
