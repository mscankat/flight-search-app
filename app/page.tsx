"use client";
import Image from "next/image";
import banner from "@/public/banner1.jpeg";
import Form from "@/components/Form";
import List from "@/components/List";
import { useState } from "react";
interface dataType {
  onTime: boolean;
  flight_info: {
    airline: string;
    arrival_airport: string;
    arrival_date: string;
    arrival_time: string;
    departure_airport: string;
    departure_date: string;
    departure_time: string;
    flight_number: number;
    price: number;
  };
}
export default function Home() {
  const [data, setData] = useState<dataType[] | null>(null);
  return (
    <>
      <div className=" absolute flex flex-col justify-center items-center">
        <Image src={banner} alt="plane photo" className=" object-"></Image>
        <Form setData={setData} />
        <List data={data} />
        <div className="h-48"></div>
      </div>
    </>
  );
}
