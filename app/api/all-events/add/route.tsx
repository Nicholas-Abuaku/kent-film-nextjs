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
  // const heading = formData.get("title");
  try {
    const formData = await request.formData();
    // console.log("formDataDebug:", formData); // Log for debugging

    const axiosRes = await axios.post(
      "https://kentfilm2025-production.up.railway.app/api/allscreenings",
      formData,
      { headers }
    );

    if (axiosRes.status === 200) {
      console.log(axiosRes.data);
      return NextResponse.json({ success: axiosRes.data });
    } else {
      console.log(axiosRes.data);
      return NextResponse.json({ error: axiosRes.status });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }

  return NextResponse.json({ message: "bad" });
}
