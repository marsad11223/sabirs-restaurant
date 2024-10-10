import { Box } from "@mui/material";
import Navbar from "@/_components/navbar/Navbar";
import HeroSection from "./_sections/Hero";
import Marquee from "./_sections/FoodItemMarquee";
import LabmKarahi from "./_sections/LambKarahi";
export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Marquee />
      <LabmKarahi />
    </Box>
  );
}
