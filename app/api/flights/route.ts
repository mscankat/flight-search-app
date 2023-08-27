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
  const departureDate = body.departureDate;
  const returnDate = body.returnDate;

  let departure_flights: any[] = [];
  let return_flights: any[] = [];

  for (const x of flights) {
    const flight_info = x;

    const flightDuration = x.flight_duration / 3600;
    const n = new Date(0, 0);
    n.setMinutes(+Math.round(flightDuration * 60));
    const hours = n.getHours();
    const minutes = n.getMinutes();
    // console.log("Hours: ", hours, "Minutes: ", minutes);
    const flight_duration_string = hours + " hour " + minutes + " minutes";
    // console.log(x.flight_duration);
    // console.log(flightDuration);

    if (x.departure_airport === origin && x.arrival_airport === arrival) {
      // console.log(flightArrivalDate.valueOf() - flightDepartureDate.valueOf());
      // console.log(flightArrivalDate, flightDepartureDate);

      if (x.departure_date.toString() === departureDate.toString()) {
        departure_flights.push({
          onTime: true,
          ...flight_info,
          flight_duration_string: flight_duration_string,
        });
      } else {
        departure_flights.push({
          onTime: false,
          ...flight_info,
          flight_duration_string: flight_duration_string,
        });
      }
    }
    if (returnDate) {
      if (x.arrival_airport === origin && x.departure_airport === arrival) {
        if (x.departure_date.toString() === returnDate.toString()) {
          return_flights.push({
            onTime: true,
            ...flight_info,
            flight_duration_string: flight_duration_string,
          });
        } else {
          return_flights.push({
            onTime: false,
            ...flight_info,
            flight_duration_string: flight_duration_string,
          });
        }
      }
    }
  }

  // console.log(result);
  return NextResponse.json({
    departure_flights: departure_flights,
    return_flights: return_flights,
  });
}
