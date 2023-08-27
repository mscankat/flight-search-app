export async function getData(
  origin: string,
  arrival: string,
  departureDate: number
) {
  const url = process.env.NEXT_PUBLIC_URL;
  const query = {
    origin: origin,
    arrival: arrival,
    departureDate: departureDate,
  };
  try {
    const response = await fetch(`${url}/api/flights`, {
      method: "POST",
      body: JSON.stringify(query),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error on fetch:", error);
  }
}
