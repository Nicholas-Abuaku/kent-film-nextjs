import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("isLoggedIn");
  let url = req.url;
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("https://kentfilmfoundation.co.uk/login");
  }

  if (verify && url === "https://kentfilmfoundation.co.uk/login") {
    return NextResponse.redirect(`https://kentfilmfoundation.co.uk/dashboard`);
  }
}
