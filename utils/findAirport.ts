import airports from "@/public/airports.json";
export function FindAirport(code: string) {
  for (const x of airports) {
    if (x.code.toLowerCase() === code.toLowerCase()) {
      return x.city;
    }
  }
}
