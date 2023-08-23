import Image from "next/image";
import banner from "@/public/banner1.jpeg";
export default function Home() {
  return (
    <>
      <div className=" absolute flex flex-col justify-center items-center">
        <Image src={banner} alt="plane photo" className=" object-"></Image>
        <div className="w-1000 h-96 bg-gray-400 relative bottom-24 rounded-xl">
          <div className="flex gap-1 p-11">
            <div className="bg-slate-100 p-1 rounded-s-xl">One Way</div>
            <div className="bg-slate-100 p-1 rounded-e-xl">Round Trip</div>
          </div>
          <div className="flex px-11 pb-11 justify-between">
            <div className="w-96 bg-slate-300 p-3">from</div>
            <div>exh</div>
            <div className="w-96 bg-slate-300 p-3">to</div>
          </div>
          <div className="flex px-11 justify-between">
            <div className="w-60 bg-slate-200 p-3">departure</div>
            <div className="w-60 bg-slate-200 p-3">return</div>
            <div className="w-60 bg-slate-200 p-3">passenger</div>
            <div className="w-40 text-center bg-slate-50 p-3">button</div>
          </div>
        </div>
      </div>
    </>
  );
}
