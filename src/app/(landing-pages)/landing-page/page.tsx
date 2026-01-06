import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";
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

  const features2 = [
    {
      icon: svgs.flexibleSeating,
      firstWord: "Flexible ",
      secondWord: "seating",
      description: "Flexible seating for small to large groups",
    },
    {
      icon: svgs.customizableMenus,
      firstWord: "Customizable",
      secondWord: "menus",
      description: "Customizable menus tailored to your event",
    },
    {
      icon: svgs.eventCoordinator,
      firstWord: "event ",
      secondWord: "coordinator",
      description: "Dedicated event coordinator for seamless planning",
    },
    {
      icon: svgs.equipmentAvailability,
      firstWord: "equipment",
      secondWord: "availability",
      description: "Audio and visual equipment available upon request",
    },
  ];
  return (
    <Box>
      <HeroLandingPage bgImage="./bgHeroLandingPage.png" />
      <SabirsGrillYourChoice />
      <FeatureGridSection
        heading1="Sabir’s Grill"
        heading2="Your Choice"
        description="Enjoy expertly grilled food, bold tastes, and friendly service that feels like home."
        features={features}
        backgroundColor="#FFFFFF"
      />

      <CustomerFavoritesAlwaysFresh />
      <FeatureGridSection
        backgroundImage="/bgCelebrateTogetherAtSabir.png"
        backgroundColor="#FFFFFF"
        heading1="Celebrate Together"
        heading2="At Sabir’s"
        description="Enjoy delicious food and personalized service in the perfect setting for your next party or event."
        features={features2}
        buttonText="Reserve Your Spot"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
