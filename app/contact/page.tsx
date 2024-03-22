import React from "react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: true,
});
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Kent Film Foundation! ",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with the Kent Film Foundation! ",
    type: "website",
    url: "https://kentfilmfoundation.co.uk/contact",
  },
  alternates: {
    canonical: "https://kentfilmfoundation.co.uk/contact",
  },
};
function Contact() {
  return <ContactForm />;
}

export default Contact;
