import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import HeroLandingPage from "./_sections/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";
import CelebrateTogetherAtSabirs from "./_sections/CelebrateTogetherAtSabirs";
import CravingSomethingDeliciousNow from "./_sections/CravingSomethingDeliciousNow";

export default function LandingPage() {
  return (
    <Box>
      <CravingSomethingDeliciousNow />
      <HeroLandingPage />
      <SabirsGrillYourChoice />
      <CustomerFavoritesAlwaysFresh />
      <CelebrateTogetherAtSabirs />
      <CravingSomethingDeliciousNow />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
