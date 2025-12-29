import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import HeroLandingPage from "./_sections/HeroLandingPage";

export default function LandingPage() {
  return (
    <Box>
      <HeroLandingPage />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
