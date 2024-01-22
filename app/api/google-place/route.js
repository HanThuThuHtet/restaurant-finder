import { NextResponse } from "next/server";

const OVERPASS_API_BASE_URL = "https://overpass-api.de/api/interpreter";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const radius = searchParams.get("radius");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const overpassQuery = `
    [out:json];
    (
      node["amenity"="restaurant"]["cuisine"="${category}"](around:${radius},${lat},${lng});
      way["amenity"="restaurant"]["cuisine"="${category}"](around:${radius},${lat},${lng});
    );
    out body;
    >;
    out skel qt;
  `;

  const res = await fetch(OVERPASS_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `data=${encodeURIComponent(overpassQuery)}`,
  });

  const osmData = await res.json();

  return NextResponse.json({ osmData });
}


