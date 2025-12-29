import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import HeroLandingPage from "./_sections/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";

export default function LandingPage() {
  return (
    <Box>
      <SabirsGrillYourChoice />
      <HeroLandingPage />
      <SabirsGrillYourChoice />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
