import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import FoodWorthTheTrip from "./_sections/FoodWorthTheTrip";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import FeatureGridSection from "../components/FeatureGridSection";
import CTASection from "../components/CTASection";

export default function LandingPage2() {
  const features = [
    {
      icon: svgs.juicySmashBurgers,
      firstWord: "JUICY SMASH",
      secondWord: "BURGERS",
      description: "Juicy smash burgers and grilled favourites",
    },
    {
      icon: svgs.irresistiblePizzas,
      firstWord: "IRRESISTIBLE",
      secondWord: "PIZZAS",
      description: "Irresistible pizzas, including Sabir’s Specials",
    },
    {
      icon: svgs.tenderKebab,
      firstWord: "TENDER",
      secondWord: "KEBAB",
      description: "Tender wraps, kebabs, and classic sides",
    },
    {
      icon: svgs.dineInTakeaway,
      firstWord: "DINE-IN",
      secondWord: "TAKEAWAY",
      description: "Options for dine-in meals or easy takeaway orders",
    },
    {
      icon: svgs.friendlyService,
      firstWord: "FRIENDLY",
      secondWord: "SERVICE",
      description: "Friendly service and a welcoming atmosphere for all ages",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.redPrityIcon}
        bannerText="Welcome to Sabir's Grill"
        bgImage="./LandingPages/bgHeroLandingPage2.png"
        heading1="Local Diner Sheffield"
        heading2="& Rotherham"
        button1Text="Order Now"
        button2Text="Explore Menu"
        description="Looking for a diner in Sheffield that serves great food, offers both dine-in and takeaway, and is conveniently located on London Road Sheffield? You’ve come to the right place!"
        maxWidth="940px"
      />
      <FeatureGridSection
        heading1="Where Flavour"
        heading2="Comes First"
        description="At Sabir’s, we’re more than just a place to eat — we’re a dining
            destination that brings bold, comforting flavours to every plate:"
        features={features}
        backgroundColor="#FFFFFF"
        maxWidth="1200px"
      />
      <FoodWorthTheTrip />
      <CTASection
        headingWhite="Dine-In or"
        headingRed="Grab Takeaway"
        description="Big flavours, quality ingredients, and food you’ll love—freshly prepared, perfectly grilled, and served just the way it should be."
        button1Text="Order Now"
        button2Text="Reserve Your Table"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
