"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePick({
  disabled,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: {
  disabled: boolean;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}) {
  const [date, setDate] = useState(new Date());

  const handleChange = (range: [Date | null, Date | null]) => {
    const [startDate, endDate] = range;

    setStartDate(startDate);
    setEndDate(endDate);
    console.log(startDate, endDate, range);
  };
  const handleChangeOne = (start: Date) => {
    setStartDate(start);
  };
  return disabled ? (
    <>
      <Datepicker
        className="w-60 bg-slate-200 p-3 cursor-pointer rounded-lg"
        dateFormat={"dd/MM/yyyy"}
        selected={startDate}
        onChange={handleChangeOne}
        startDate={startDate}
        isClearable
        minDate={new Date()}
        placeholderText="Departure date"
      />
      <Datepicker
        dateFormat={"dd/MM/yyyy"}
        disabled
        className="w-60 p-3 rounded-lg"
        onChange={() => null}
      />
    </>
  ) : (
    <>
      <Datepicker
        className="w-60 bg-slate-200 p-3 cursor-pointer rounded-lg"
        dateFormat={"dd/MM/yyyy"}
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        selectsRange
        monthsShown={2}
        isClearable
        minDate={new Date()}
        placeholderText="Departure date"
      />
      <Datepicker
        className="w-60 bg-slate-200 p-3 cursor-pointer rounded-lg"
        dateFormat={"dd/MM/yyyy"}
        onChange={(end) => setEndDate(end)}
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        isClearable
        monthsShown={2}
        minDate={startDate}
        placeholderText="Return date"
      />
    </>
  );
}
