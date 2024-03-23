import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest, response: NextResponse) {
  const API_KEY = process.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };

  try {
    const formData = await request.formData();
    const title = formData.get("heading");
    const imgUrl = formData.get("img_Url");
    // return NextResponse.json({
    //   heading: title,
    //   img: imgUrl,
    // });
    const axiosRes = await axios.post(
      "https://picayune-belief-production.up.railway.app/api/featured-content",
      formData,
      { headers }
    );
    if (axiosRes.status === 201) {
      return NextResponse.json({ success: axiosRes.data });
    } else {
      return NextResponse.json({ error: axiosRes.data });
    }
  } catch (err) {
    return NextResponse.json({ message: err });
  }

  // return NextResponse.json({message:})
}
