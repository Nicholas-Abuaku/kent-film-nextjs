import { Metadata } from "next";
import dynamic from "next/dynamic";
const AboutContent = dynamic(() => import("../components/AboutContent"), {
  ssr: true,
});
export const metadata: Metadata = {
  title: "About",
};
function About() {
  return <AboutContent />;
}

export default About;
