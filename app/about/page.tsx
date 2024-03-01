import { Metadata } from "next";
import AboutContent from "../components/AboutContent";
export const metadata: Metadata = {
  title: "About",
};
function About() {
  return <AboutContent />;
}

export default About;
