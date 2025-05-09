import { Metadata } from "next";
import dynamic from "next/dynamic";
import AboutContent2 from "../components/AboutContent2";

export const metadata: Metadata = {
  title: "About",
};
function About() {
  return (
    <>
      <AboutContent2 />
    
    </>
  );
}

export default About;
