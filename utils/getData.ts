export async function getData(
  origin: string,
  arrival: string,
  departureDate: number
) {
  const query = {
    origin: origin,
    arrival: arrival,
    departureDate: departureDate,
  };
  try {
    const response = await fetch("http://localhost:3000/api/flights", {
      method: "POST",
      body: JSON.stringify(query),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error on fetch:", error);
  }
}
