import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
import { useParams } from "next/navigation";
import { NextApiRequest } from "next";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
  response: NextResponse
) {
  const API_KEY = process.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };
  console.log("PARAMS: " + params.id);
  try {
    console.log("formData:"); // Log for debugging

    const axiosRes = await axios.delete(
      "https://kentfilm2025-production.up.railway.app/api/film-clubs/" +
        params.id,

      { headers }
    );

    if (axiosRes.status === 200) {
      return NextResponse.json({ success: axiosRes.data });
    } else {
      return NextResponse.json({ error: axiosRes.status });
    }
  } catch (err) {
    return NextResponse.json({ message: err });
  }

  return NextResponse.json({ message: params.id });
}
