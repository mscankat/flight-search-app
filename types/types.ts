export interface airportType {
  code: string;
  name: string;
  city: string;
  country: string;
}
export interface flightInfo {
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
export interface dataType {
  flights: flightInfo[];
}
