"use client";
import AirportInput from "./AirportInput";
import DatePick from "./DatePick";
import PassengerSelect from "./PassengerSelect";
import ToggleTripDirection from "./ToggleTripDirection";
import { useState } from "react";

export default function Form() {
  const [direction, setDirection] = useState("one");
  return (
    <>
      <div className="w-1000 h-96 bg-gray-400 relative bottom-24 rounded-xl">
        <ToggleTripDirection
          direction={direction}
          setDirection={setDirection}
        />
        <div className="flex px-11 pb-11 justify-between">
          <AirportInput />
          <div>exh</div>
          <AirportInput />
        </div>
        <div className="flex px-11 justify-between">
          <DatePick disabled={direction === "one" ? true : false} />
          <PassengerSelect />
          <button className="w-40 text-center bg-green-500 p-3 rounded-lg">
            search
          </button>
        </div>
      </div>
    </>
  );
}
