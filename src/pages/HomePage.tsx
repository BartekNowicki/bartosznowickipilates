import Hero from "../sections/Hero";
import Approach from "../sections/Approach";
import AboutMe from "../sections/AboutMe";
import Benefits from "../sections/Benefits";
import FirstSession from "../sections/FirstSession";
import WhereSessions from "../sections/WhereSessions";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";
import MapSection from "../sections/MapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <AboutMe />
      <Benefits />
      <FirstSession />
      <WhereSessions />
      <Pricing />
      <CTA />
      <MapSection />
    </>
  );
}