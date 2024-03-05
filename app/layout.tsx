import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Navigation2 from "./components/Navigation2";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kent Film Foundation | Film & Workshops",
    template: "%s - Kent Film Foundation",
  },
  description:
    "Free film clubs, screenings, & workshops in Ramsgate. Explore the world of film with Kent Film Foundation! Learn More",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://kentfilmfoundation.vercel.app/",
  },
  alternates: {
    canonical: "https://kentfilmfoundation.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Navigation />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
