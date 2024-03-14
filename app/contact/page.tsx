import React from "react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: true,
});
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
};
function Contact() {
  return <ContactForm />;
}

export default Contact;
