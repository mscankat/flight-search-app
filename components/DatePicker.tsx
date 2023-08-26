export default function DatePicker({ disabled }: { disabled: boolean }) {
  return disabled ? (
    <input disabled type="date" className="w-60 bg-gray-300 p-3 rounded-lg" />
  ) : (
    <input type="date" className="w-60 bg-slate-200 p-3 rounded-lg" />
  );
}
