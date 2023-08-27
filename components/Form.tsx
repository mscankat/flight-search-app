"use client";
import { airportType, dataType } from "@/types/types";
import AirportInput from "./AirportInput";
import DatePick from "./DatePick";
import PassengerSelect from "./PassengerSelect";
import ToggleTripDirection from "./ToggleTripDirection";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getData } from "@/utils/getData";

export default function Form({
  setData,
  setReturnData,
}: {
  setData: Dispatch<SetStateAction<dataType | null>>;
  setReturnData: Dispatch<SetStateAction<dataType | null>>;
}) {
  const [direction, setDirection] = useState("one");
  const [originAirport, setOriginAirport] = useState<airportType | null>(null);
  const [arrivalAirport, setArrivalAirport] = useState<airportType | null>(
    null
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setEndDate(null);
  }, [direction]);
  //validation (disable button if is not valid)
  useEffect(() => {
    if (direction === "one") {
      if (originAirport && arrivalAirport && startDate) {
        setValid(true);
      } else {
        setValid(false);
      }
    } else if (direction === "round") {
      if (originAirport && arrivalAirport && startDate && endDate) {
        setValid(true);
      } else {
        setValid(false);
      }
    }
  }, [originAirport, arrivalAirport, startDate, endDate, direction]);

  //Handle Submit
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (originAirport && arrivalAirport && startDate) {
      setData(
        await getData(
          originAirport?.code,
          arrivalAirport?.code,
          startDate?.valueOf()
        )
      );
      if (endDate) {
        setReturnData(
          await getData(
            arrivalAirport?.code,
            originAirport?.code,
            endDate?.valueOf()
          )
        );
      }
    }
  };
  return (
    <>
      <div className="w-1000 h-80 bg-main relative bottom-24 rounded-xl">
        <ToggleTripDirection
          direction={direction}
          setDirection={setDirection}
        />
        <div className="flex px-11 pb-11 justify-between">
          <AirportInput
            destination="From"
            airport={originAirport}
            setAirport={setOriginAirport}
          />
          <div>
            <img src="/icons/exchange.png" alt="" />
          </div>
          <AirportInput
            destination="To"
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
            disabled={valid ? false : true}
            onClick={handleSubmit}
            className="w-40 text-center bg-green-500 p-3 rounded-lg disabled:bg-gray-300"
          >
            Search flight
          </button>
        </div>
      </div>
    </>
  );
}
