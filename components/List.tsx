"use client";
interface flightInfo {
  onTime: boolean;
  airline: string;
  arrival_airport: string;
  arrival_date: number;
  departure_airport: string;
  departure_date: number;
  flight_number: number;
  price: number;
  flight_duration: number;
  flight_duration_string: string;
}
interface dataType {
  departure_flights: flightInfo;
  return_flights: flightInfo;
}
export default function List({ data }: { data: flightInfo[] }) {
  console.log(data);
  if (data.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="mb-12">
        <div>
          <div className="text-2xl  text-left w-full pb-6">
            <div className="text-gray-500 font-medium text-xl">Flights for</div>
            <span className="font-semibold">Kayseri </span>(
            {data[0].departure_airport}) to{" "}
            <span className="font-semibold">Istanbul </span>(
            {data[0].arrival_airport})
          </div>
        </div>
        <div className="">
          {data.map((flight) => {
            return (
              <div
                key={flight.flight_number}
                className="flex w-1000 h-32 bg-gray-300 items-center mb-2 justify-between"
              >
                <div className="w-32 bg-gray-600 h-full "></div>
                <div className="flex gap-8 mr-20 items-center">
                  <div className="text-center">
                    <div className="font-medium text-lg">
                      {new Date(flight.departure_date).getHours() +
                        ":" +
                        new Date(flight.departure_date).getMinutes()}
                    </div>
                    <div className="font-light">{flight.departure_airport}</div>
                  </div>
                  <div className="bg-main rounded-full p-1 text-xs font-light text-white tracking-wider">
                    {flight.flight_duration_string}
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-lg">
                      {new Date(flight.arrival_date).getHours() +
                        ":" +
                        new Date(flight.arrival_date).getMinutes()}
                    </div>
                    <div className="font-light">{flight.arrival_airport}</div>
                  </div>
                </div>
                <div className="">
                  <div>{flight.airline}</div>
                  <div>{flight.flight_number}</div>
                </div>
                <div className="bg-slate-200 h-full w-32 flex items-center justify-center">
                  <div className="">{flight.price + "$"}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
