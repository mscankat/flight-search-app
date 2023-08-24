import Image from "next/image";
import banner from "@/public/banner1.jpeg";
import Form from "@/components/Form";
export default function Home() {
  return (
    <>
      <div className=" absolute flex flex-col justify-center items-center">
        <Image src={banner} alt="plane photo" className=" object-"></Image>
        <Form />
      </div>
    </>
  );
}
