import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import WhereFlavourComesFirst from "./_sections/WhereFlavourComesFirst";
import DineInOrGrabTakeAway from "./_sections/DineInOrGrabTakeAway";
import FoodWorthTheTrip from "./_sections/FoodWorthTheTrip";
import Footer from "@/_components/Footer";

export default function LandingPage2() {
  return (
    <Box>
      <HeroLandingPage
        bannerText="Welcome to Sabir's Grill"
        bgImage="./bgHeroLandingPage.png"
        heading1="Your Local Diner"
        heading2="in Sheffield"
        description="Looking for a diner in Sheffield that serves great food, offers both dine-in and takeaway, and is conveniently located on London Road Sheffield? You’ve come to the right place!"
      />
      <WhereFlavourComesFirst />
      <DineInOrGrabTakeAway />
      <FoodWorthTheTrip />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
