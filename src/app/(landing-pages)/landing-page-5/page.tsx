import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import FeatureGridSection from "../components/FeatureGridSection";
import CTASection from "../components/CTASection";
import PizzaStylesForEveryTaste from "../components/PizzaStylesForEveryTaste";
import FlameGrilledMeats from "./_sections/flameGrilledMeats";
// import FlameGrilledMeats from "./_sections/flameGrilledMeats";

export default function LandingPage5() {
  const features = [
    {
      icon: svgs.charcoalAndFlameGrilled,
      firstWord: "Charcoal &",
      secondWord: "flame-grilled",
      description: "Our meats are cooked over real charcoal and open flames",
    },
    {
      icon: svgs.authenticKebabsMadeFresh,
      firstWord: "Authentic kebabs",
      secondWord: "made fresh",
      description: "Authentic kebabs made fresh daily, marinated with spices",
    },
    {
      icon: svgs.hundredPercentHalalMeat,
      firstWord: "100% halal",
      secondWord: "meat",
      description:
        "100% halal meat options, cooked fresh and handled with integrity",
    },
    {
      icon: svgs.boldMarinadesAndSpices,
      firstWord: "Bold marinades",
      secondWord: "and spices",
      description: "Bold marinades and traditional spices, carefully blended.",
    },
    {
      icon: svgs.dineInAndQuickTakeaway,
      firstWord: "dine-in &",
      secondWord: "quick takeaway",
      description: "Comfortable dine-in & quick takeaway",
    },
    {
      icon: svgs.locatedInSheffield,
      firstWord: "located",
      secondWord: "in Sheffield",
      description: "Conveniently located in Sheffield, for relaxed dining",
    },
  ];
  const features2 = [
    {
      icon: svgs.handTopped,
      firstWord: "Hand",
      secondWord: "topped",
      description: "Hand-topped before baking using fresh, quality ingredients",
    },
    {
      icon: svgs.freshFromOven,
      firstWord: "Fresh from",
      secondWord: "oven",
      description: "Fresh from oven to box, locking in heat and flavour",
    },
    {
      icon: svgs.bigPortions,
      firstWord: "Big",
      secondWord: "portions",
      description: "Big portions, generous toppings, and excellent value",
    },
    {
      icon: svgs.consistentQuality,
      firstWord: "Consistent",
      secondWord: "quality",
      description:
        "Consistent quality every time for a reliable, delicious experience",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.familyFriendlyRestaurantInSheffield}
        bannerText="Family Friendly Restaurant in Sheffield"
        bgImage="./bgHeroLandingPage5.png"
        heading1="Relaxed Dining for"
        heading2="Families & Groups"
        description="At Sabir’s, we bring people together over great food in a welcoming, relaxed space. Known as a family friendly restaurant in Sheffield, we’re the perfect place for family meals, catch-ups with friends, and group dining in Sheffield. With spacious seating, generous portions, and a comfortable atmosphere, every visit feels easy and enjoyable."
        button1Text="Book a Table"
        button2Text="Plan Group Dining"
      />
      <InfoSection
        heading1="A Place Families"
        heading2="Feel Welcome"
        description="Sabir’s is designed with families in mind. Whether you’re visiting with young children, teenagers, or multiple generations, our calm and friendly environment makes dining together stress-free and enjoyable."
        description2="We focus on comfort, space, and service — so families can relax, talk, and enjoy their meal without feeling rushed. From weekday dinners to weekend family outings, Sabir’s has become a trusted choice for family meals in Sheffield."
        imageSrc={webp.aPlaceFamiliesFeelWelcome}
      />
      <FeatureGridSection
        heading1="Why customers"
        heading2="love our grill"
        description="At Sabir’s, grilling isn’t just cooking — it’s a craft. Our chefs specialise in flame-grilled meats and traditional kebabs, delivering rich flavour, perfect char, and juicy texture in every bite."
        features={features}
        backgroundColor="#FFFFFF"
      />
      <FlameGrilledMeats />
      <PizzaStylesForEveryTaste />
      <InfoSection
        heading1="Freshly Baked Pizza"
        heading2="Served Generousl"
        description="Every pizza at Sabir’s is baked fresh to order — never rushed, never reheated. Our portions are designed to satisfy, whether you’re ordering for yourself or sharing with friends and family."
        imageSrc={webp.freshlyBakedPizzay}
        backgroundColor="#851A1D"
      />
      <FeatureGridSection
        heading1="Why Our Pizza"
        heading2="Stands Out"
        features={features2}
        backgroundColor="#FFFFFF"
      />
      <CTASection
        headingWhite="Order Fresh Pizza"
        headingRed="in Sheffield Today"
        description="Hungry for freshly baked pizza on London Road? Order now and enjoy bold flavours, generous portions and fast service."
        button1Text="Go To Main Page"
        button2Text="Our Menu"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
