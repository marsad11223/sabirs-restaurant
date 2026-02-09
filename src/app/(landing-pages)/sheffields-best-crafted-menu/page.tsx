"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import HeroLandingPage from "../components/HeroLandingPage";
import SabirsGrillYourChoice from "./_sections/SabirsGrillYourChoice";
import CustomerFavoritesAlwaysFresh from "./_sections/CustomerFavoritesAlwaysFresh";
import Footer from "@/_components/Footer";
import FeatureGridSection from "../components/FeatureGridSection";
import svgs from "@/_assets/svgs";

export default function SheffieldsBestCraftedMenuPage() {
  const router = useRouter();

  const features = [
    {
      icon: svgs.expertChefs,
      firstWord: "EXPERT",
      secondWord: "CHEFS",
      description:
        "Trained specialists perfecting every burger with precision.",
      onClick: () => router.push("/order-sheffield"),
    },
    {
      icon: svgs.premiumQuality,
      firstWord: "PREMIUM",
      secondWord: "QUALITY",
      description: "Only the finest ingredients sourced locally.",
      onClick: () => router.push("/order-sheffield"),
    },
    {
      icon: svgs.madeWithLove,
      firstWord: "MADE WITH",
      secondWord: "LOVE",
      description:
        "Every item is crafted with passion and attention to detail.",
      onClick: () => router.push("/order-sheffield"),
    },
  ];

  const features2 = [
    {
      icon: svgs.flexibleSeating,
      firstWord: "Flexible ",
      secondWord: "seating",
      description: "Flexible seating for small to large groups",
      onClick: () => router.push("/contact-us"),
    },
    {
      icon: svgs.customizableMenus,
      firstWord: "Customizable",
      secondWord: "menus",
      description: "Customizable menus tailored to your event",
      onClick: () => router.push("/contact-us"),
    },
    {
      icon: svgs.eventCoordinator,
      firstWord: "event ",
      secondWord: "coordinator",
      description: "Dedicated event coordinator for seamless planning",
      onClick: () => router.push("/contact-us"),
    },
    {
      icon: svgs.equipmentAvailability,
      firstWord: "equipment",
      secondWord: "availability",
      description: "Audio and visual equipment available upon request",
      onClick: () => router.push("/contact-us"),
    },
  ];
  return (
    <Box>
      <HeroLandingPage
        icon={svgs.redStar}
        bannerText="Rated #1 Burger Joint in Sheffield"
        heading1="Sheffield’s Best"
        heading2="CRAFTED menu"
        description="At Sabir's Grill, we serve freshly grilled food made with quality ingredients and bold flavours. Every dish is prepared with care, cooked to perfection, and designed to give you a satisfying dining experience worth coming back for."
        button1Text="Order Now"
        button2Text="Explore Menu"
        button1OnClick={() => router.push("/order-sheffield")}
        button2OnClick={() => router.push("/order-sheffield")}
        maxWidth="880px"
        bgImage="./LandingPages/bgHeroLandingPage.png"
      />
      <SabirsGrillYourChoice onClaimNowClick={() => router.push("/order")} />
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
        buttonOnClick={() => router.push("/contact-us")}
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
