import React from "react";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
};
function Contact() {
  return <ContactForm />;
}

export default Contact;
