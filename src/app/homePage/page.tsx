import { Box } from "@mui/material";
import Navbar from "@/_components/navbar/Navbar";
import Hero from "./_sections/Hero";
// import HeroSection from "./_sections/HeroSection";
import Marquee from "./_sections/FoodItemMarquee";
// import LabmKarahi from "./_sections/LambKarahi";
import SabirsGrillWelcome from "./_sections/SabirsGrillWelcome";
import Footer from "@/_components/footer/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      {/* <HeroSection /> */}
      <Marquee />
      {/* <LabmKarahi /> */}
      <SabirsGrillWelcome />
      <Footer />
    </Box>
  );
}
