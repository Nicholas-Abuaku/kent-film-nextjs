import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  //   const formData = await request.formData();
  //   const name = formData.get("name");
  //   const password = formData.get("password");
  cookies().delete("isLoggedIn");

  return NextResponse.json(
    {
      message: "Logged out successfully",
    },
    { status: 200 }
  );
}
