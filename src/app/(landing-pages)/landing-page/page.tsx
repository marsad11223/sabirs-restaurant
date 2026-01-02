import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";
import CelebrateTogetherAtSabirs from "./_sections/CelebrateTogetherAtSabirs";
import CravingSomethingDeliciousNow from "./_sections/CravingSomethingDeliciousNow";
import Footer from "@/_components/Footer";
import FeatureGridSection from "../components/FeatureGridSection";
import svgs from "@/_assets/svgs";

export default function LandingPage() {
  const features = [
    {
      icon: svgs.expertChefs,
      firstWord: "EXPERT",
      secondWord: "CHEFS",
      description:
        "Trained specialists perfecting every burger with precision.",
    },
    {
      icon: svgs.premiumQuality,
      firstWord: "PREMIUM",
      secondWord: "QUALITY",
      description: "Only the finest ingredients sourced locally.",
    },
    {
      icon: svgs.madeWithLove,
      firstWord: "MADE",
      secondWord: "WITH LOVE",
      description:
        "Every item is crafted with passion and attention to detail.",
    },
  ];

  return (
    <Box>
      <HeroLandingPage bgImage="./bgHeroLandingPage.png" />
      <SabirsGrillYourChoice />
      <FeatureGridSection
        heading1="Why Choose"
        heading2="Our Services"
        description="We provide reliable, secure, and high-quality solutions tailored to your needs."
        features={features}
        backgroundColor="#FFFFFF"
        buttonText="Get Started"
      />

      <CustomerFavoritesAlwaysFresh />
      <CelebrateTogetherAtSabirs />
      <CravingSomethingDeliciousNow />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
