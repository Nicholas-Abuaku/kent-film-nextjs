import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("isLoggedIn");
  let url = req.url;
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("https://kentfilmfoundation.vercel.app/login");
  }

  if (verify && url === "https://kentfilmfoundation.vercel.app/login") {
    return NextResponse.redirect(
      `https://kentfilmfoundation.vercel.app/dashboard`
    );
  }
}
