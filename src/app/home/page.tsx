import { Box } from "@mui/material";
import HeroHome from "./_sections/HeroHome";
import Marquee from "./_sections/FoodSlider";
import SmashBurger from "./_sections/SmashBurger";
// import SignatureFlavours from "./_sections/SignatureFlavours";
import Location from "./_sections/Location";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <HeroHome />
      <Marquee />
      <SmashBurger />
      {/* <SignatureFlavours /> */}
      <Location />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
