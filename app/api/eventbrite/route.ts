import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  const API_KEY = process.env.NEXT_EVENTBRITE_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(
      "https://www.eventbriteapi.com/v3/organizations/335808768129/events/",
      { headers, params: { status: "live" } }
    );

    // Filter events based on "status" property in each event object
    const liveEvents = response.data.events.filter(
      (event) => event.status === "live"
    );

    return NextResponse.json(liveEvents); // Return only live events
  } catch (err) {
    console.error(err); // Log detailed error for debugging
    return NextResponse.json({ message: err.message }); // Return specific error message
  }
}
