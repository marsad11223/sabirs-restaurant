import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import FeatureGridSection from "../components/FeatureGridSection";
import CTASection from "../components/CTASection";
import PizzaStylesForEveryTaste from "../components/PizzaStylesForEveryTaste";
import RedThemeShowcaseSection from "../components/RedThemeShowcaseSection";

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

  const showcaseItems = [
    {
      image: webp.popularChoices1,
      title: "Chicken Tikka",
      title2: "Pizza",
      price: "£8.99",
      description: "Juicy chicken with bold tikka flavour.",
    },
    {
      image: webp.popularChoices2,
      title: "Pepperoni ",
      title2: "Pizza",
      price: "£3.99",
      description: "Loaded with spicy pepperoni slices",
    },
    {
      image: webp.popularChoices3,
      title: "Meat Feast",
      title2: "Pizza",
      price: "£8.99",
      description: "A rich mix of premium meats.",
    },
    {
      image: webp.popularChoices4,
      title: "MARGHERITA",
      title2: "PIZZA",
      price: "£9.99",
      description:
        "Classic thin crust with fresh tomatoes, mozzarella, and basil.",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.sheffieldFavorite}
        bannerText="SHEFFIELD FAVORITE"
        bgImage="./bgHeroLandingPage4.png"
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
      <RedThemeShowcaseSection
        primaryHeading1="Our Pizza Menu"
        primaryHeading2="In Sheffield"
        primaryDescription="Explore our range of freshly baked pizzas, all served on a hearty base and made to fill you up."
        secondaryHeading1="Popular"
        secondaryHeading2="Choices"
        items={showcaseItems}
        button="View More"
      />
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
