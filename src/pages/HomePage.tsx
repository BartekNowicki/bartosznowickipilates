import Hero from "../sections/Hero";
import Approach from "../sections/Approach";
import AboutMe from "../sections/AboutMe";
import ForWho from "../sections/ForWho";
import FirstSession from "../sections/FirstSession";
import WhereSessions from "../sections/WhereSessions";
import CTA from "../sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <AboutMe />
      <ForWho />
      <FirstSession />
      <WhereSessions />
      <CTA />
    </>
  );
}