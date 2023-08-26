"use client";
import AirportInput from "./AirportInput";
import DatePick from "./DatePick";
import PassengerSelect from "./PassengerSelect";
import ToggleTripDirection from "./ToggleTripDirection";
import { useState } from "react";
interface airportType {
  code: string;
  name: string;
  city: string;
  country: string;
}
export default function Form() {
  const [direction, setDirection] = useState("one");
  const [originAirport, setOriginAirport] = useState<airportType | null>(null);
  const [arrivalAirport, setArrivalAirport] = useState<airportType | null>(
    null
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [departureTime, setDepartureTime] = useState();
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(startDate?.valueOf);
    const query = {
      origin: originAirport?.code,
      arrival: arrivalAirport?.code,
      departureDate: startDate?.valueOf(),
    };
    const response = await fetch("http://localhost:3000/api/flights", {
      method: "POST",
      body: JSON.stringify(query),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className="w-1000 h-96 bg-gray-400 relative bottom-24 rounded-xl">
        <ToggleTripDirection
          direction={direction}
          setDirection={setDirection}
        />
        <div className="flex px-11 pb-11 justify-between">
          <AirportInput airport={originAirport} setAirport={setOriginAirport} />
          <div>exh</div>
          <AirportInput
            airport={arrivalAirport}
            setAirport={setArrivalAirport}
          />
        </div>
        <div className="flex px-11 justify-between">
          <DatePick
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            disabled={direction === "one" ? true : false}
          />
          <PassengerSelect />
          <button
            onClick={handleSubmit}
            className="w-40 text-center bg-green-500 p-3 rounded-lg"
          >
            search
          </button>
        </div>
      </div>
    </>
  );
}
