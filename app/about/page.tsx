import { Metadata } from "next";
import dynamic from "next/dynamic";
import AboutContent2 from "../components/AboutContent2";
import About3 from "../components/About3";
export const metadata: Metadata = {
  title: "About",
};
function About() {
  return (
    <>
      {/* <AboutContent2 /> */}
      <About3 />
    </>
  );
}

export default About;
