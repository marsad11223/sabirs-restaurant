import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import WhereFlavourComesFirst from "./_sections/WhereFlavourComesFirst";
import DineInOrGrabTakeAway from "./_sections/DineInOrGrabTakeAway";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";

export default function LandingPage3() {
  return (
    <Box>
      <HeroLandingPage
        icon={svgs.Hamburger}
        bannerText="Juicy, flavour-packed burgers"
        bgImage="./bgHeroLandingPage3.png"
        heading1="Best Burgers"
        heading2="at sabir’s"
        description="Find classic beef burgers, crispy chicken burgers and tasty veg options — all cooked to order and served with fresh toppings and sauces."
      />
      <WhereFlavourComesFirst />
      <DineInOrGrabTakeAway />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
