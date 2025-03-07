import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import Marquee from "./_sections/FoodSlider";
import SmashBurger from "./_sections/SmashBurger";
import Footer from "@/_components/Footer";
import Location from "./_sections/Location";
import SignatureFlavours from "./_sections/SignatureFlavours";

export default function HomePage() {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroHome />
      <Marquee />
      <SmashBurger />
      {/* <SignatureFlavours /> */}
      <Location />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
