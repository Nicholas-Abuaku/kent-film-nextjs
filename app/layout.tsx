import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kent Film Foundation | Ramsgate Community Cinema",
    template: "%s - Kent Film Foundation",
  },
  description:
    "Free film clubs, screenings, & workshops in Ramsgate. Explore the world of film with Kent Film Foundation! Learn More",
  keywords: [
    "Kent Film Foundation",
    "Ramsgate Community Cinema",
    "Ramsgate Cinema",
    "Free film workshops",
    "Community cinema screenings Thanet",
    "Ramsgate Film",
    "Ramsgate Cinemas",
    "Cinemas in Ramsgate",
    "Cinemas in Kent",
    "Cinemas in Thanet",
    "Film Club Ramsgate",
    "Film Club Kent",
    "Film Club Thanet",
  ],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://kentfilmfoundation.co.uk/",
  },
  alternates: {
    canonical: "https://kentfilmfoundation.co.uk/",
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
          <SpeedInsights />
          <Analytics />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
