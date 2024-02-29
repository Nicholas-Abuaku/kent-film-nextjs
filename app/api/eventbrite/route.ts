import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

interface Event {
  status: string; // Assuming "status" is a property with a string value
  // Add other properties as needed, specifying their types
}
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
      (event: Event) => event.status === "live"
    );

    return NextResponse.json(liveEvents); // Return only live events
  } catch (err: unknown) {
    console.error(err); // Log detailed error for debugging
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message });
    }
  }
}
