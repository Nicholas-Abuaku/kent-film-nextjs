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
      "https://kentfilm.up.railway.app/api/login",
      formData
    );
    const data = axiosRes.data;
    if (data.status === true) {
      cookies().set("isLoggedIn", true);
      return NextResponse.json({ message: "success" });
    }
  } catch (err) {
    return NextResponse.json({
      eror: err,
    });
  }

  //   return NextResponse.json({
  //     user: name,
  //     pass: password,
  //   });
}
