"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import CTASection from "../components/CTASection";
import FeatureHighlights from "../components/FeatureHighlights";
import RedThemeShowcaseSection from "../components/RedThemeShowcaseSection";
import FeatureGridSection from "../components/FeatureGridSection";

export default function SheffieldTakeawayFastFreshPage() {
  const router = useRouter();
  const features = [
    {
      icon: svgs.freshFoodMadeToOrder,
      firstWord: "Fresh Food,",
      secondWord: "Made to Order",
      description: "Every dish at Sabir’s is prepared fresh when you order.",
    },
    {
      icon: svgs.quickConvenientCollection,
      firstWord: "Quick & Convenient",
      secondWord: "Collection",
      description: "Perfect for lunch breaks, dinner on the way home.",
    },
    {
      icon: svgs.trustedTakeawayInSheffield,
      firstWord: "Trusted Takeaway",
      secondWord: "in Sheffield",
      description: "We’re proud to be a go-to food takeaway on London Road",
    },
  ];

  const features2 = [
    {
      icon: svgs.one,
      firstWord: "Choose Your",
      secondWord: "Food",
      description: "Browse our menu and pick your favourites.",
    },
    {
      icon: svgs.two,
      firstWord: "Place Your",
      secondWord: "Order",
      description: "Order online or by phone and choose your collection time.",
    },
    {
      icon: svgs.three,
      firstWord: "Collect &",
      secondWord: "Enjoy",
      description:
        "Visit Sabir’s on London Road, Sheffield, and collect your food.",
    },
  ];

  const highlightCardsData = [
    {
      title: "Juicy grilled meats and wraps",
      description:
        "Perfectly grilled, juicy meats served in fresh wraps for a satisfying bite every time.",
    },
    {
      title: "Hearty meals perfect for lunch or dinner",
      description:
        "Filling, freshly prepared meals that keep you satisfied from lunch through dinner.",
    },
    {
      title: "Freshly prepared burgers",
      description:
        "Juicy burgers freshly prepared to order, packed with flavour and ready for quick collection.",
    },
    {
      title: "Sides and extras to complete your order",
      description:
        "Complete your meal with a range of delicious sides and extras, made fresh for every order.",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.collectionOnLondonRoad}
        bannerText="Collection Only on London Road"
        bgImage="./LandingPages/bgHeroLandingPage8.png"
        heading1="Sheffield Takeaway"
        heading2="– Fast & Fresh"
        description="Looking for a reliable takeaway in Sheffield? Sabir’s offers freshly prepared food for collection only, conveniently located on London Road. Order ahead, collect on time, and enjoy hot, flavour-packed food without delivery delays."
        button1Text="Order Online"
        button2Text="Explore Menu"
        maxWidth="900px"
        button1OnClick={() => router.push("/order-sheffield")}
        button2OnClick={() => router.push("/order-sheffield")}
      />
      <FeatureGridSection
        heading1="Why Choose"
        heading2="Sabir’s Takeaway?"
        features={features}
        backgroundColor="#FFFFFF"
        maxWidth="1200px"
      />
      <InfoSection
        heading1="Local Takeaway"
        heading2="on London Road"
        description="If you’re searching for a takeaway in Sheffield or food takeaway on London Road, Sabir’s is a convenient choice. Our central location makes us ideal for nearby residents, workers, and students looking for quick, freshly cooked food to collect."
        imageSrc={webp.localTakeawayOnLondonRoad}
        reverseOrder={true}
        backgroundColor="#851A1D"
      />
      <FeatureGridSection
        heading1="How Our Collection"
        heading2="Service Works"
        features={features2}
        backgroundColor="#FFFFFF"
        maxWidth="1200px"
      />

      <FeatureHighlights
        heading1="Popular"
        heading2="Takeaway Choices"
        description="From classic favourites to filling meals, our menu is ideal for takeaway collection in Sheffield:"
        cards={highlightCardsData}
        redTheme={true}
      />
      <CTASection
        headingWhite="Order Your"
        headingRed="Takeaway Today"
        description="Order now and collect your food from Sabir’s on London Road — simple, convenient, and always freshly prepared."
        button1Text="Order Now"
        button2Text="Contact Us"
        button1OnClick={() => router.push("/order-sheffield")}
        button2OnClick={() => router.push("/contact-us")}
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
