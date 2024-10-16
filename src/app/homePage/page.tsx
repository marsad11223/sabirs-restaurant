import { Box } from "@mui/material";
import Hero from "./_sections/Hero";
// import HeroSection from "./_sections/HeroSection";
import Marquee from "./_sections/FoodItemMarquee";
import OurMenu from "./_sections/OurMenu";
// import LabmKarahi from "./_sections/LambKarahi";
import SabirsGrillWelcome from "./_sections/SabirsGrillWelcome";
import NewDishes from "./_sections/NewDishes";
import Footer from "@/_components/footer/Footer";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Marquee />
      {/* <HeroSection /> */}
      <OurMenu />
      {/* <LabmKarahi /> */}
      <SabirsGrillWelcome />
      <NewDishes />
      <Footer />
    </Box>
  );
}
