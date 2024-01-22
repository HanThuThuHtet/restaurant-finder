import { NextResponse } from "next/server";

const OVERPASS_API_BASE_URL = "https://overpass-api.de/api/interpreter";

export async function GET(query) {

const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
//   const radius = searchParams.get("radius");
//   const lat = searchParams.get("lat");
//   const lng = searchParams.get("lng");

  const overpassQuery = `
    [out:json];
    (
      node["amenity"="restaurant"]["cuisine"="${query}"];
      way["amenity"="restaurant"]["cuisine"="${query}"];
    );
    out body;
    >;
    out skel qt;
  `;

  const res = await fetch(OVERPASS_API_BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `data=${encodeURIComponent(overpassQuery)}`,
  });

  const osmData = await res.json();

  return NextResponse.json({ osmData });
}


