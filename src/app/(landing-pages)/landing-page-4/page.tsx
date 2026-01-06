import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import FeatureGridSection from "../components/FeatureGridSection";
import CTASection from "../components/CTASection";
import OurPizzaMenuInSheffield from "./_sections/OurPizzaMenuInSheffield";
import PizzaStylesForEveryTaste from "../components/PizzaStylesForEveryTaste";

export default function LandingPage4() {
  const features = [
    {
      icon: svgs.cookedFreshToOrder,
      firstWord: "Cooked fresh",
      secondWord: "to order",
      description:
        "Fresh dough prepared daily, baked for a soft and airy base.",
    },
    {
      icon: svgs.cheeseAndTopping,
      firstWord: "cheese and",
      secondWord: "topping",
      description: "Generous cheese and topping portions",
    },
    {
      icon: svgs.classicAndSpeciality,
      firstWord: "classic &",
      secondWord: "speciality",
      description: "Wide range of classic & speciality pizzas",
    },
    {
      icon: svgs.bakedFresh,
      firstWord: "Baked",
      secondWord: "fresh",
      description: "Baked fresh on London Road, Sheffield",
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
        icon={svgs.Hamburger}
        bannerText="Juicy, flavour-packed burgers"
        bgImage="./bgHeroLandingPage3.png"
        heading1="Pizza in Sheffield "
        heading2="Freshly Baked"
        description="Craving authentic, freshly baked pizza in Sheffield? At Sabir’s on London Road, we serve generous, flavour-packed pizzas made fresh to order — from classic favourites to bold signature specials."
        button1Text="Order Pizza"
        button2Text="Explore Menu"
      />
      <InfoSection
        heading1="WHY OUR"
        heading2="PIZZA"
        description="At Sabir’s, pizza is our passion. Every pizza is prepared with fresh dough, rich tomato sauce, quality cheese and generous toppings. Whether you prefer a classic base or something bold and spicy, our pizzas are baked fresh and served in satisfying portions every time."
        imageSrc={webp.whyOurPizza}
      />
      <FeatureGridSection
        heading1="Why locals"
        heading2="our pizza love"
        description="Expect generous portions, comforting favourites, and flavours that keep people coming back. Eat in, take away, or order ahead — good food is always waiting."
        features={features}
        backgroundColor="#FFFFFF"
      />
      <OurPizzaMenuInSheffield />
      <PizzaStylesForEveryTaste />
      <InfoSection
        heading1="Freshly Baked Pizza"
        heading2="Served Generousl"
        description="Every pizza at Sabir’s is baked fresh to order — never rushed, never reheated. Our portions are designed to satisfy, whether you’re ordering for yourself or sharing with friends and family."
        imageSrc={webp.freshlyBakedPizzay}
        backgroundColor="#851A1D"
      />
      <FeatureGridSection
        heading1="Why locals"
        heading2="our pizza love"
        description="Expect generous portions, comforting favourites, and flavours that keep people coming back. Eat in, take away, or order ahead — good food is always waiting."
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
