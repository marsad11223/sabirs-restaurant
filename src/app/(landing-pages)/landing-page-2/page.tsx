import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import WhereFlavourComesFirst from "./_sections/WhereFlavourComesFirst";
import DineInOrGrabTakeAway from "./_sections/DineInOrGrabTakeAway";
import FoodWorthTheTrip from "./_sections/FoodWorthTheTrip";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";

export default function LandingPage2() {
  return (
    <Box>
      <HeroLandingPage
        icon={svgs.redPrityIcon}
        bannerText="Welcome to Sabir's Grill"
        bgImage="./bgHeroLandingPage2.png"
        heading1="Local Diner Sheffield"
        heading2="& Rotherham"
        description="Looking for a diner in Sheffield that serves great food, offers both dine-in and takeaway, and is conveniently located on London Road Sheffield? You’ve come to the right place!"
      />
      <WhereFlavourComesFirst />
      <FoodWorthTheTrip />
      <DineInOrGrabTakeAway />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
