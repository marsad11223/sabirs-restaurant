import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import FeatureGridSection from "../components/FeatureGridSection";
import CTASection from "../components/CTASection";

export default function LandingPage3() {
  const features = [
    {
      icon: svgs.cookedFreshToOrder,
      firstWord: "Cooked fresh",
      secondWord: "to order",
      description: "Prepared fresh when you order, never pre-made.",
    },
    {
      icon: svgs.topTierQuality,
      firstWord: "top tier",
      secondWord: "Quality",
      description:
        "Made with quality beef, tender chicken or delicious vegies.",
    },
    {
      icon: svgs.grilledOrSmashed,
      firstWord: "Grilled or",
      secondWord: "smashed",
      description: "Grilled or smashed on a hot plate for maximum flavour",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.Hamburger}
        bannerText="Juicy, flavour-packed burgers"
        bgImage="./bgHeroLandingPage3.png"
        heading1="Best Burgers"
        heading2="at sabir’s"
        button1Text="Visit Our Diner"
        description="Find classic beef burgers, crispy chicken burgers and tasty veg options — all cooked to order and served with fresh toppings and sauces."
      />
      <InfoSection
        heading1="WHY OUR BURGERS"
        heading2="ARE SPECIAL"
        description="At Sabir’s, we believe a great burger starts with quality ingredients and bold flavours. From classic grilled beef patties to crispy chicken fillets and satisfying vegetarian choices, our burgers are designed to delight every taste. Whether you’re craving a hearty smash burger or something lighter, we’ve got you covered right here at Sabir’s."
        imageSrc={webp.whyOurBurgersAreSpecial}
      />
      <InfoSection
        heading1="What Makes"
        heading2="Them Great"
        description="Smash burgers are a our favourite — thin, seared patties pressed on the grill for that crispy edge and juicy inside, packed with toppings and served in a soft bun. Scratch-made and cooked to lock in flavour, they’re a go-to option for burger lovers."
        imageSrc={webp.whatMakesThemGreat}
        backgroundColor="#851A1D"
        reverseOrder={true}
      />
      <FeatureGridSection
        heading1="how we cook"
        heading2="your burger"
        description="Expect generous portions, comforting favourites, and flavours that keep people coming back. Eat in, take away, or order ahead — good food is always waiting."
        features={features}
        backgroundColor="#FFFFFF"
      />
      <CTASection
        headingWhite="Ready For"
        headingRed="Great Burgers?"
        description="Explore more on our main diner page and see the full menu overview:"
        button1Text="Go To Main Page"
        button2Text="Our Menu"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
