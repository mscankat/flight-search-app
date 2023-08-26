"use client";
import { Dispatch, SetStateAction, useState } from "react";

export default function PassengerSelect() {
  const [dropDown, setDropDown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleClickClose = () => {
    setDropDown(false);
  };
  const handleClickOpen = () => {
    setDropDown(!dropDown);
  };
  const handleAdd = (
    setFunction: Dispatch<SetStateAction<number>>,
    state: number
  ) => {
    setFunction(state + 1);
  };
  const handleRemove = (
    setFunction: Dispatch<SetStateAction<number>>,
    state: number
  ) => {
    if (state > 0) {
      setFunction(state - 1);
    }
  };
  return (
    <>
      <div className="w-60 relative bg-slate-200 p-1 px-2 rounded-lg">
        <div onClick={handleClickOpen} className="cursor-pointer">
          <div className="text-xs ">Passenger</div>
          <div className="">{adults + children + infants + " Passengers"}</div>
        </div>
        {dropDown && (
          <div className="absolute top-14 left-0 bg-slate-200 w-60 rounded-sm">
            <ul className="p-4">
              <li>
                <div
                  className="cursor-pointer w-5 ml-auto mb-2"
                  onClick={handleClickClose}
                >
                  <img src={"/icons/close.png"} alt="close icon" />
                </div>
              </li>
              <li className="mb-2">
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="font-medium">Adults</div>
                    <div className="text-xs">from 12 years</div>
                  </div>

                  <div className="flex items-center">
                    {adults === 1 ? (
                      <div className="w-4 cursor-pointer opacity-20">
                        <img src="/icons/minus.png" alt="" />
                      </div>
                    ) : (
                      <div
                        onClick={() => handleRemove(setAdults, adults)}
                        className="w-4 cursor-pointer"
                      >
                        <img src="/icons/minus.png" alt="" />
                      </div>
                    )}
                    <div className="px-1">{adults}</div>
                    <div
                      onClick={() => handleAdd(setAdults, adults)}
                      className="w-4 cursor-pointer"
                    >
                      <img src="/icons/plus.png" alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="font-medium">Children</div>
                    <div className="text-xs">from 2-11 years</div>
                  </div>

                  <div className="flex items-center">
                    <div
                      onClick={() => handleRemove(setChildren, children)}
                      className="w-4 cursor-pointer"
                    >
                      <img src="/icons/minus.png" alt="" />
                    </div>
                    <div className="px-1">{children}</div>
                    <div
                      onClick={() => handleAdd(setChildren, children)}
                      className="w-4 cursor-pointer "
                    >
                      <img src="/icons/plus.png" alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="font-medium">Infants</div>
                    <div className="text-xs">up to 24 months</div>
                  </div>

                  <div className="flex items-center">
                    <div
                      onClick={() => handleRemove(setInfants, infants)}
                      className="w-4 cursor-pointer"
                    >
                      <img src="/icons/minus.png" alt="" />
                    </div>
                    <div className="px-1">{infants}</div>
                    <div
                      onClick={() => handleAdd(setInfants, infants)}
                      className="w-4 cursor-pointer"
                    >
                      <img src="/icons/plus.png" alt="" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
