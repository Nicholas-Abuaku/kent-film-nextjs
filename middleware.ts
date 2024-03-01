import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("isLoggedIn");
  let url = req.url;
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
  }

  if (verify && url === `${process.env.NEXT_PUBLIC_BASE_URL}/login`) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`
    );
  }
}
