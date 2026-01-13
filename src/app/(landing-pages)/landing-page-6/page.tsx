import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import CTASection from "../components/CTASection";
import FeatureHighlights from "../components/FeatureHighlights";
import GenerousPortionsMeantForSharing from "./_sections/GenerousPortionsMeantForSharing";

export default function LandingPage6() {
  const highlightCardsData = [
    {
      title: "Family friendly restaurant in Sheffield",
      description:
        "A relaxed, welcoming space with generous portions and comfortable seating, perfect for families and groups of all sizes.",
    },
    {
      title: "Generous, share-friendly portions",
      description:
        "Our generous portions are perfect for sharing, making group and family meals more enjoyable.",
    },
    {
      title: "Relaxed, welcoming atmosphere",
      description:
        "A comfortable space where families and groups can dine together, unwind, and enjoy great food at their own pace.",
    },
    {
      title: "Ideal for family meals, celebrations, and gatherings",
      description:
        "A relaxed space with generous portions, perfect for bringing families and groups together.",
    },
    {
      title: "Spacious seating for groups",
      description:
        "Thoughtfully arranged seating designed to comfortably accommodate families and larger groups.",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.familyFriendlyRestaurantInSheffield}
        bannerText="Family Friendly Restaurant in Sheffield"
        bgImage="./LandingPages/bgHeroLandingPage6.png"
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
      <GenerousPortionsMeantForSharing />
      <InfoSection
        heading1="Group Dining "
        heading2="Made Easy"
        description="Looking for group dining in Sheffield that feels relaxed and effortless? Sabir’s is ideal for group meals of all kinds — birthdays, celebrations, work gatherings, or casual meet-ups with friends."
        description2="Our flexible seating allows groups to sit together comfortably, making it easy to share food, conversations, and memorable moments. Whether it’s a small group or a larger gathering, we ensure everyone feels included."
        imageSrc={webp.groupDiningMadeEasy}
      />
      <FeatureHighlights
        heading1="Why Families "
        heading2="Choose Us"
        cards={highlightCardsData}
        redTheme={true}
      />
      <CTASection
        headingWhite="Gather Around"
        headingRed="Great Food"
        description="Enjoy generous portions, a relaxed atmosphere, and meals made to be shared with family and friends."
        button1Text="Reserve Your Table"
        button2Text="Contact Us"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
