import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
import { useParams } from "next/navigation";
import { NextApiRequest } from "next";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
  response: NextResponse
) {
  const API_KEY = process.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };
  // const formData = await request.formData();
  // const heading = formData.get("heading");
  try {
    const formData = await request.formData();
    console.log("formData:", formData); // Log for debugging

    const axiosRes = await axios.post(
      "https://kentfilm.up.railway.app/api/press/",
      formData,
      { headers }
    );

    if (axiosRes.status === 201) {
      return NextResponse.json({ success: axiosRes.data });
    } else {
      return NextResponse.json({ error: axiosRes.status });
    }
  } catch (err) {
    return NextResponse.json({ message: err });
  }

  return NextResponse.json({ message: "something went horribly wrong" });
}
