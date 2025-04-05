import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  const name = formData.get("name");
  const password = formData.get("password");

  try {
    const axiosRes = await axios.post(
      "https://kentfilm2025-production.up.railway.app/api/login",
      formData
    );
    const data = axiosRes.data;
    if (data.status === true) {
      cookies().set({ name: "isLoggedIn", value: "true" });
      return NextResponse.json({ message: "success" }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(
      {
        eror: "Error",
      },
      { status: 401 }
    );
  }
}
