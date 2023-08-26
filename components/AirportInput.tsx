"use client";
import { useState } from "react";

interface dataType {
  code: string;
  name: string;
  city: string;
  country: string;
}

export default function AirportInput() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<dataType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
      setSuggestions(data);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (suggestion: dataType) => {
    setInput(suggestion.name);
    setShowSuggestions(false);
  };
  const handleSuggestionClose = () => {
    setShowSuggestions(false);
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
      {suggestions[0] && showSuggestions && (
        <ul className="absolute top-14 bg-zinc-100 rounded-sm ">
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
