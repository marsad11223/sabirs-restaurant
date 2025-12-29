import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import HeroLandingPage from "./_sections/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";

export default function LandingPage() {
  return (
    <Box>
      <HeroLandingPage />
      <SabirsGrillYourChoice />
      <CustomerFavoritesAlwaysFresh />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
