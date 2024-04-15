import { Metadata } from "next";
import dynamic from "next/dynamic";
const AboutContent = dynamic(() => import("../components/AboutContent"), {
  ssr: true,
});
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
