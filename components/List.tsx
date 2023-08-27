"use client";
import { dataType, flightInfo } from "@/types/types";
import { FindAirport } from "@/utils/findAirport";
import { Dispatch, SetStateAction, useState } from "react";

export default function List({
  data,
  setData,
}: {
  data: flightInfo[];
  setData: Dispatch<SetStateAction<dataType | null>>;
}) {
  const [sort, setSort] = useState(true);
  const handleSortByTime = (a: boolean) => {
    const sorted = a
      ? data.sort((a, b) => a.departure_date - b.departure_date)
      : data.sort((b, a) => a.departure_date - b.departure_date);
    setData({ flights: sorted });
    setSort(!sort);
  };
  const handleSortByPrice = (a: boolean) => {
    const sorted = a
      ? data.sort((a, b) => a.price - b.price)
      : data.sort((b, a) => a.price - b.price);
    setData({ flights: sorted });
    setSort(!sort);
  };
  const handleSortByDuration = (a: boolean) => {
    const sorted = a
      ? data.sort((a, b) => a.flight_duration - b.flight_duration)
      : data.sort((b, a) => a.flight_duration - b.flight_duration);
    setData({ flights: sorted });
    setSort(!sort);
  };
  console.log(data);
  if (data.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="mb-12">
        <div>
          <div className="text-2xl  text-left w-full pb-2">
            <div className="text-gray-500 font-medium text-xl">Flights for</div>
            <span className="font-semibold">
              {FindAirport(data[0].departure_airport)}{" "}
            </span>
            ({data[0].departure_airport}) to{" "}
            <span className="font-semibold">
              {FindAirport(data[0].arrival_airport)}{" "}
            </span>
            ({data[0].arrival_airport})
          </div>
          <div className="pb-4 text-xl">
            {new Date(data[0].arrival_date).toString().split(" ")[2] +
              " " +
              new Date(data[0].arrival_date).toString().split(" ")[1]}
          </div>
        </div>
        <div className="flex justify-end gap-6 mb-4 pr-4 h-10 items-center rounded-t-md bg-main text-white font-bold">
          <div className="text-sm font-light">Sort by</div>
          <div
            onClick={() => handleSortByTime(sort)}
            className="cursor-pointer"
          >
            Departure Time
          </div>
          <div
            onClick={() => handleSortByDuration(sort)}
            className="cursor-pointer"
          >
            Flight Duration
          </div>
          <div
            onClick={() => handleSortByPrice(sort)}
            className="cursor-pointer"
          >
            Price
          </div>
        </div>
        <div>
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
                      {("0" + new Date(flight.departure_date).getHours()).slice(
                        -2
                      ) +
                        ":" +
                        (
                          "0" + new Date(flight.departure_date).getMinutes()
                        ).slice(-2)}
                    </div>
                    <div className="font-light">{flight.departure_airport}</div>
                  </div>
                  <div className="bg-main rounded-full p-1 px-2 text-xs font-light text-white tracking-wider">
                    {flight.flight_duration_string}
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-lg">
                      {("0" + new Date(flight.arrival_date).getHours()).slice(
                        -2
                      ) +
                        ":" +
                        (
                          "0" + new Date(flight.arrival_date).getMinutes()
                        ).slice(-2)}
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
