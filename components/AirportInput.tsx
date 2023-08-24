"use client";
import { useState } from "react";

export default function AirportInput() {
  const [input, setInput] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = async (e: any) => {
    setInput(e.target.value);
    const reqBody = { query: e.target.value };
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
    const data = await response.json();
    console.log(data);
    setSuggestions(data);
  };
  return (
    <div className="flex flex-col">
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className="relative w-96 bg-slate-300 p-3 rounded-lg"
        placeholder="from"
      />
      <ul className="absolute -bottom-16 bg-zinc-100 p-4 rounded-lg ">
        <li className="text-right">X</li>
        {suggestions.slice(0, 10).map((suggestion, index) => {
          return <li key={index}> {suggestion.code + suggestion.city}</li>;
        })}
      </ul>
    </div>
  );
}
