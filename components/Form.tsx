import AirportInput from "./AirportInput";
import DatePicker from "./DatePicker";
import PassengerSelect from "./PassengerSelect";
import ToggleTripDirection from "./ToggleTripDirection";

export default function Form() {
  return (
    <>
      <div className="w-1000 h-96 bg-gray-400 relative bottom-24 rounded-xl">
        <ToggleTripDirection />
        <div className="flex px-11 pb-11 justify-between">
          <AirportInput />
          <div>exh</div>
          {/* <AirportInput /> */}
        </div>
        <div className="flex px-11 justify-between">
          <DatePicker />
          <DatePicker />
          <PassengerSelect />
          <button className="w-40 text-center bg-green-500 p-3 rounded-lg">
            search
          </button>
        </div>
      </div>
    </>
  );
}
