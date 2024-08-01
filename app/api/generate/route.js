export async function GET(request) {
  // Extract query parameters from the request URL
  const url = new URL(request.url);

  // Extract the imageUrl parameter from the query parameters
  const imageUrl = url.searchParams.get("imageUrl");

  if (!imageUrl) {
    return new Response(
      JSON.stringify({ error: "Missing imageUrl parameter" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Define the base URL for the API
  const baseURL = "https://alt-text-generator.vercel.app/api/generate";

  // Construct a URL object from the base URL
  const apiURL = new URL(baseURL);
  apiURL.searchParams.append("imageUrl", imageUrl);

  console.log("Constructed URL:", apiURL.toString());

  try {
    const response = await fetch(apiURL.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fetch error:", error);

    return new Response(
      JSON.stringify({ error: "An error occurred while fetching data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
