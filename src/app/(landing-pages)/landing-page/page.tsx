import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";
import CelebrateTogetherAtSabirs from "./_sections/CelebrateTogetherAtSabirs";
import CravingSomethingDeliciousNow from "./_sections/CravingSomethingDeliciousNow";
import Footer from "@/_components/Footer";

export default function LandingPage() {
  return (
    <Box>
      <HeroLandingPage
        bgImage="./bgHeroLandingPage.png"
        heading1="CUSTOM HEADING"
        heading2="SECOND PART"
        button1Text="Custom Button"
      />
      <SabirsGrillYourChoice />
      <CustomerFavoritesAlwaysFresh />
      <CelebrateTogetherAtSabirs />
      <CravingSomethingDeliciousNow />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
