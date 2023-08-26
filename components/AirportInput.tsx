"use client";
import { Dispatch, SetStateAction, useState } from "react";

interface dataType {
  code: string;
  name: string;
  city: string;
  country: string;
}

export default function AirportInput({
  airport,
  setAirport,
}: {
  airport: dataType | null;
  setAirport: Dispatch<SetStateAction<dataType | null>>;
}) {
  const [suggestions, setSuggestions] = useState<dataType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = async (e: any) => {
    setInput(e.target.value);
    if (e.target.value !== "") {
      const reqBody = { query: e.target.value };
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(reqBody),
      });
      const data: dataType[] = await response.json();
      console.log(data);
      setAirport(null);
      setSuggestions(data);
      setShowSuggestions(true);
    } else {
      setAirport(null);
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (suggestion: dataType) => {
    setAirport(suggestion);
    setInput(suggestion.name);
    setShowSuggestions(false);
  };
  const handleSuggestionClose = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col relative">
      <div className=" w-96 bg-slate-300 p-2 rounded-lg ">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="from"
          className="bg-transparent outline-none w-full"
        />
        {airport && (
          <div className="text-sm">
            {airport.city + " (" + airport.code + ")"}
          </div>
        )}
      </div>
      {suggestions[0] && showSuggestions && (
        <ul className="absolute top-14 bg-zinc-100 rounded-sm z-10 ">
          <li>
            <div
              onClick={handleSuggestionClose}
              className=" cursor-pointer w-2 ml-auto mr-6 mt-2 p-2"
            >
              X
            </div>
          </li>
          {suggestions.map((suggestion, index) => {
            return (
              <li
                className=" py-3 flex w-96 px-4 text-sm justify-between hover:bg-blue-300 cursor-pointer"
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div>
                  {suggestion.name +
                    ", " +
                    suggestion.city +
                    ", " +
                    suggestion.country}
                </div>
                <div>{suggestion.code}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
