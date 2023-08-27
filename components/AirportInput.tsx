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
  destination,
}: {
  airport: dataType | null;
  setAirport: Dispatch<SetStateAction<dataType | null>>;
  destination: string;
}) {
  const [suggestions, setSuggestions] = useState<dataType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const url = process.env.NEXT_PUBLIC_URL;

  const handleChange = async (e: any) => {
    setInput(e.target.value);
    if (e.target.value !== "") {
      const reqBody = { query: e.target.value };
      try {
        const response = await fetch(`${url}/api`, {
          method: "POST",
          body: JSON.stringify(reqBody),
        });
        const data: dataType[] = await response.json();
        setAirport(null);
        setSuggestions(data);
        setShowSuggestions(true);
      } catch (error) {
        console.log("Error on fetch:", error);
      }
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
  const handleClearInput = () => {
    setInput("");
    setAirport(null);
  };

  return (
    <div className="flex flex-col relative">
      <div className=" w-96 bg-slate-300 p-2 rounded-lg flex items-center">
        <img
          className="w-7 mr-3 ml-2"
          src={
            destination === "From"
              ? "/icons/departure.png"
              : "icons/arrival.png"
          }
          alt="airplane icon"
        />
        <div className="flex-1">
          <input
            type="text"
            onChange={handleChange}
            value={input}
            placeholder={destination}
            className="bg-transparent outline-none cursor-pointer w-full px-1"
          />
          {airport && (
            <div className="text-sm px-1">
              {airport.city + " (" + airport.code + ")"}
            </div>
          )}
        </div>
        <div onClick={handleClearInput} className="w-5 cursor-pointer">
          <img src="icons/close.png" alt="" />
        </div>
      </div>
      {suggestions[0] && showSuggestions && (
        <ul className="absolute top-14 bg-zinc-100 rounded-sm z-10 ">
          <li>
            <div
              onClick={handleSuggestionClose}
              className=" cursor-pointer w-5 ml-auto m-4 mb-2"
            >
              <img src={"/icons/close.png"} alt="close icon" />
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
