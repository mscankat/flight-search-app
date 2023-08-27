"use client";
import Image from "next/image";
import banner from "@/public/banner1.jpeg";
import Form from "@/components/Form";
import List from "@/components/List";
import { useEffect, useState } from "react";
interface flightInfo {
  onTime: boolean;
  airline: string;
  arrival_airport: string;
  arrival_date: number;
  departure_airport: string;
  departure_date: number;
  flight_number: number;
  price: number;
  flight_duration: number;
  flight_duration_string: string;
}
interface dataType {
  departure_flights: flightInfo[];
  return_flights: flightInfo[];
}
export default function Home() {
  const [data, setData] = useState<dataType | null>(null);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className=" absolute flex flex-col justify-center items-center">
        <Image src={banner} alt="plane photo" className=" object-"></Image>
        <Form setData={setData} />
        {data && (
          <>
            <List data={data.departure_flights} />
            <List data={data.return_flights} />
          </>
        )}

        <div className="h-48"></div>
      </div>
    </>
  );
}
