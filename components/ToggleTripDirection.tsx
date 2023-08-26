"use client";

import { Dispatch, SetStateAction, useState } from "react";
interface props {
  direction: string;
  setDirection: Dispatch<SetStateAction<string>>;
}
export default function ToggleTripDirection({
  direction,
  setDirection,
}: props) {
  const handleClick = (e: React.MouseEvent) => {
    setDirection(e.currentTarget.id);
  };
  return (
    <div className="flex gap-1 p-11">
      <div
        onClick={handleClick}
        id="one"
        className={` p-1 rounded-s-xl cursor-pointer transition-colors ${
          direction === "one" ? "bg-blue-400" : "bg-slate-100"
        }`}
      >
        One Way
      </div>
      <div
        onClick={handleClick}
        id="round"
        className={` p-1 rounded-e-xl cursor-pointer transition-colors ${
          direction === "round" ? "bg-blue-400" : "bg-slate-100"
        }`}
      >
        Round Trip
      </div>
    </div>
  );
}
