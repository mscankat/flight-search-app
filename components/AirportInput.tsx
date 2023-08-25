"use client";
import { useState } from "react";

export default function AirportInput() {
  const [input, setInput] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = async (e: any) => {
    setInput(e.target.value);
    if (e.target.value !== "") {
      const reqBody = { query: e.target.value };
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();
      console.log(data);
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };
  return (
    <div className="flex flex-col relative">
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className=" w-96 bg-slate-300 p-3 rounded-lg"
        placeholder="from"
      />
      {suggestions[0] && (
        <ul className="absolute top-14 bg-zinc-100 p-4 rounded-lg ">
          <li className="text-right">X</li>
          {suggestions.map((suggestion, index) => {
            return (
              <li className="mt-1" key={index}>
                {" "}
                {suggestion.code + " " + suggestion.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
