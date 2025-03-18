import { Box } from "@mui/material";
import HeroHomeRamadan from "./_sections/HeroHomeRamadan";
// import HeroHome from "./_sections/HeroHome";
import Marquee from "./_sections/FoodSlider";
import SmashBurger from "./_sections/SmashBurger";
import Footer from "@/_components/Footer";
import Location from "./_sections/Location";
// import SignatureFlavours from "./_sections/SignatureFlavours";

export default function HomePage() {
  return (
    <Box>
      <HeroHomeRamadan />
      {/* <HeroHome /> */}
      <Marquee />
      <SmashBurger />
      {/* <SignatureFlavours /> */}
      <Location />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
