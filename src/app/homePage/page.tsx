import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Hero from "./_sections/Hero";
import Marquee from "./_sections/FoodSlider";
import SmashBurger from "./_sections/SmashBurger";
import SignatureFlavours from "./_sections/SignatureFlavours";
import Footer from "@/_components/Footer";
import Location from "./_sections/Location";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Marquee />
      <SmashBurger />
      <SignatureFlavours />
      <Location />
      <Footer />
    </Box>
  );
}
