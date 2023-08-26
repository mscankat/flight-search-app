interface dataType {
  onTime: boolean;
  flight_info: {
    airline: string;
    arrival_airport: string;
    arrival_date: string;
    arrival_time: string;
    departure_airport: string;
    departure_date: string;
    departure_time: string;
    flight_number: number;
    price: number;
  };
}
export default function List({ data }: { data: dataType[] | null }) {
  return (
    <>
      <div>
        {data && (
          <div className="">
            <div className="text-2xl  text-left w-full pb-12">
              <div className="text-gray-500 font-medium text-xl">
                Flights for
              </div>
              <span className="font-semibold">Kayseri </span>(
              {data[0].flight_info.departure_airport}) to{" "}
              <span className="font-semibold">Istanbul </span>(
              {data[0].flight_info.arrival_airport})
            </div>
          </div>
        )}
      </div>
      <div className="">
        {data?.map((flight) => {
          return (
            <div
              key={flight.flight_info.flight_number}
              className="flex w-1000 h-32 bg-gray-300 items-center mb-2 justify-between"
            >
              <div className="w-32 bg-gray-600 h-full "></div>
              <div className="flex gap-8 mr-20 items-center">
                <div className="text-center">
                  <div className="font-medium text-lg">
                    {flight?.flight_info.departure_time}
                  </div>
                  <div className="font-light">
                    {flight?.flight_info.departure_airport}
                  </div>
                </div>
                <div className="bg-main rounded-full p-1 text-xs font-light text-white tracking-wider">
                  1h 10m
                </div>
                <div className="text-center">
                  <div className="font-medium text-lg">
                    {flight?.flight_info.arrival_time}
                  </div>
                  <div className="font-light">
                    {flight?.flight_info.arrival_airport}
                  </div>
                </div>
              </div>
              <div className="">
                <div>{flight?.flight_info.airline}</div>
                <div>{flight.flight_info.flight_number}</div>
              </div>
              <div className="bg-slate-200 h-full w-32 flex items-center justify-center">
                <div className="">{flight.flight_info.price + "$"}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
