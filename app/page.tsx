"use client";
import Image from "next/image";
import banner from "@/public/banner1.jpeg";
import Form from "@/components/Form";
import List from "@/components/List";
import { useEffect, useState } from "react";
import { dataType } from "@/types/types";

export default function Home() {
  const [data, setData] = useState<dataType | null>(null);
  const [returnData, setReturnData] = useState<dataType | null>(null);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className=" absolute flex flex-col justify-center items-center bg-gray-50">
        <Image src={banner} alt="plane photo" className=" object-"></Image>
        <Form setData={setData} setReturnData={setReturnData} />
        {data && (
          <>
            <List data={data.flights} setData={setData} />
          </>
        )}
        {returnData && (
          <List data={returnData.flights} setData={setReturnData} />
        )}

        <div className="h-48"></div>
      </div>
    </>
  );
}
