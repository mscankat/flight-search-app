import { NextResponse } from "next/server";
import airports from "@/public/airports.json";
import flights from "@/public/MOCK_DATA.json";
interface IReq {
  origin: string;
  arrival: string;
  departureDate: Date;
  returnDate?: Date;
}
export async function POST(request: Request) {
  const body: IReq = await request.json();
  const origin = body.origin;
  const arrival = body.arrival;
  const departureDate = body.departureDate;
  const returnDate = body.returnDate;
  let resultDeparture: any[] = [];
  let resultReturn: any[] = [];

  for (const x of flights) {
    const flight_info = x;

    if (x.departure_airport === origin && x.arrival_airport === arrival) {
      if (x.departure_date.toString() === departureDate.toString()) {
        resultDeparture.push({ onTime: true, flight_info });
      } else {
        resultDeparture.push({ onTime: false, flight_info });
      }
    }
    if (returnDate) {
      if (x.arrival_airport === origin && x.departure_airport === arrival) {
        if (x.departure_date.toString() === returnDate.toString()) {
          resultReturn.push({ onTime: true, flight_info });
        } else {
          resultReturn.push({ onTime: false, flight_info });
        }
      }
    }
  }

  // console.log(result);
  return NextResponse.json({ resultDeparture, resultReturn });
}
