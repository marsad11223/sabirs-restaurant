import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import HeroLandingPage from "./_sections/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";
import CelebrateTogetherAtSabirs from "./_sections/CelebrateTogetherAtSabirs";

export default function LandingPage() {
  return (
    <Box>
      <CelebrateTogetherAtSabirs />
      <HeroLandingPage />
      <SabirsGrillYourChoice />
      <CustomerFavoritesAlwaysFresh />
      <CelebrateTogetherAtSabirs />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
