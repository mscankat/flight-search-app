"use client";

import { useState } from "react";

export default function ToggleTripDirection() {
  const [direction, setDirection] = useState("one");
  const handleClick = (e: React.MouseEvent) => {
    setDirection(e.currentTarget.id);
    e.currentTarget.classList.add("bg-green-100");
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
        id="two"
        className={` p-1 rounded-e-xl cursor-pointer transition-colors ${
          direction === "two" ? "bg-blue-400" : "bg-slate-100"
        }`}
      >
        Round Trip
      </div>
    </div>
  );
}
