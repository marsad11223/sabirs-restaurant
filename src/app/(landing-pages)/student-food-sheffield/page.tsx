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

export default function StudentFoodSheffieldPage() {
  const router = useRouter();
  const highlightCardsData = [
    {
      title: "Hearty meals designed to keep you full",
      description:
        "Generous, satisfying meals made to fuel your day and keep hunger away for longer.",
    },
    {
      title: "Quick service for tight lecture schedules",
      description:
        "Fast, efficient service so you can enjoy a proper meal and still make it back to your next lecture on time.",
    },
    {
      title: "Affordable prices without cutting corners on quality",
      description:
        "Great value meals made with fresh ingredients, generous portions, and the same care and flavour.",
    },
    {
      title: "Casual, no-pressure dining atmosphere",
      description:
        "A relaxed, no-pressure space where you can enjoy great food, take your time, and feel right at home.",
    },
  ];
  const showcaseItems = [
    {
      image: webp.grilledKebabsMixedPlatters,
      title: "Grilled Kebabs &",
      title2: "Mixed Platters",
      price: "£8.99",
      description: "Proper meals that satisfy serious hunger",
      onClick: () => router.push("/order-sheffield"),
    },
    {
      image: webp.riceGrillMeals,
      title: "Rice & Grill",
      title2: "Meals",
      price: "£6.99",
      description: "Balanced, filling, and perfect for lunch or dinner",
      onClick: () => router.push("/order-sheffield"),
    },
    {
      image: webp.sidesAddOns,
      title: "Sides &",
      title2: "Add-ons",
      price: "£8.99",
      description: "Ideal for sharing or boosting your meal",
      onClick: () => router.push("/order-sheffield"),
    },
  ];
  const features = [
    {
      icon: svgs.comfortableSeating,
      firstWord: "Comfortable",
      secondWord: "seating",
    },
    {
      icon: svgs.friendlyService2,
      firstWord: "Friendly",
      secondWord: "support",
    },
    {
      icon: svgs.idealForStudyBreaks,
      firstWord: "Ideal for",
      secondWord: "study breaks",
    },
    {
      icon: svgs.greatForGroup,
      firstWord: "Great for",
      secondWord: "groups",
    },
  ];
  const highlightCardsData2 = [
    {
      title: "Easy in-store ordering",
      description:
        "Simple walk-in ordering with quick service, so you can get your food fast without any hassle.",
      image: svgs.easyInStoreOrdering,
    },
    {
      title: "Fast preparation times",
      description:
        "Freshly prepared meals served quickly, so you can enjoy a satisfying bite without the wait.",
      image: svgs.fastPreparationTimes,
    },
    {
      title: "Quick takeaway options",
      description:
        "Fast, filling meals prepared fresh and ready to grab when you’re short on time but still want proper food",
      image: svgs.quickTakeawayOptions,
    },
    {
      title: "Ideal for lunch breaks and evening meals",
      description:
        "Perfect for quick lunch breaks and relaxed evening meals, offering filling food that fits around a busy student schedule.",
      image: svgs.idealForLunchBreaks,
    },
  ];
  return (
    <Box>
      <HeroLandingPage
        icon={svgs.affordableFillingFullOfFlavour}
        bannerText="Affordable, Filling & Full of Flavour"
        bgImage="./LandingPages/bgHeroLandingPage10.png"
        heading1="Student Food"
        heading2="Sheffield Loves"
        description="Looking for student food in Sheffield that actually fills you up? Sabir’s is the go-to spot for cheap eats in Sheffield when you want generous portions, bold flavours, and a relaxed place to eat — all close to university areas. Whether it’s a quick bite between lectures or a proper meal after a long day, we’ve got you covered."
        button1Text="Order Now"
        button2Text="Explore Menu"
        maxWidth="680px"
        button1OnClick={() => router.push("/order-sheffield")}
        button2OnClick={() => router.push("/order-sheffield")}
      />
      <FeatureHighlights
        heading1="Why Students"
        heading2="Choose Sabir’s"
        description="Students love Sabir’s because we focus on what matters most — value, portion size, and taste."
        cards={highlightCardsData}
      />

      <RedThemeShowcaseSection
        primaryHeading1="Big Portions,"
        primaryHeading2="Great Taste"
        items={showcaseItems}
        primaryDescription="Our menu is built around filling meals that don’t feel overpriced, making us a top choice for student food in Sheffield."
        description2="Every dish is made fresh and served in generous portions — exactly what students look for in cheap eats."
        button="View More"
        secondaryHeading1="Popular"
        secondaryHeading2="student picks"
        buttonOnClick={() => router.push("/order-sheffield")}
      />
      <FeatureGridSection
        heading1="Casual, Student-"
        heading2="Friendly Atmosphere"
        description="Sabir’s offers a laid-back and welcoming vibe, perfect for students who want good food without formality."
        features={features}
        backgroundColor="#FFFFFF"
        maxWidth="1300px"
      />
      <FeatureHighlights
        heading1="Food That Fits"
        heading2="Your Schedule"
        description="Students love Sabir’s because we focus on what matters most — value, portion size, and taste."
        cards={highlightCardsData2}
        redTheme={true}
      />

      <CTASection
        headingWhite="Your Go-To for Student"
        headingRed="Food in Sheffield"
        description="If you’re tired of small portions and overpriced meals, it’s time to try Sabir’s. We’re proud to serve student-friendly food in Sheffield that’s affordable, filling, and full of flavour."
        button1Text="Visit Us"
        // button2Text="Order For Rotherham"
        button1OnClick={() => router.push("/contact-us")}
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
