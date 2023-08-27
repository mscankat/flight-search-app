import { NextResponse } from "next/server";
import flights from "@/public/domestic_flights.json";
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
  const departureDate = new Date(body.departureDate);

  let flightResults: any[] = [];

  for (const x of flights) {
    const flight_info = x;

    //get time interval
    const flightDuration = x.flight_duration / 3600;
    const n = new Date(0, 0);
    n.setMinutes(+Math.round(flightDuration * 60));
    const hours = n.getHours();
    const minutes = n.getMinutes();
    const flight_duration_string = hours + " hour " + minutes + " minutes";

    if (x.departure_airport === origin && x.arrival_airport === arrival) {
      const flightDepartureDate = new Date(x.departure_date);
      if (flightDepartureDate.getDay() === departureDate.getDay()) {
        flightResults.push({
          onTime: true,
          ...flight_info,
          flight_duration_string: flight_duration_string,
        });
      }
    }
  }

  return NextResponse.json(
    {
      flights: flightResults,
    },
    { status: 200, headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
