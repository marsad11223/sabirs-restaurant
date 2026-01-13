import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import CTASection from "../components/CTASection";
import FeatureHighlights from "../components/FeatureHighlights";
import RedThemeShowcaseSection from "../components/RedThemeShowcaseSection";

export default function LandingPage7() {
  const showcaseItems = [
    {
      image: webp.customerFavourites9,
      title: "Vegetarian",
      title2: "pizzas",
      price: "£8.99",
      description:
        "Perfectly baked vegetarian pizzas with bold flavours in every bite.",
    },
    {
      image: webp.customerFavourites10,
      title: "Fresh",
      title2: "salads",
      price: "£3.99",
      description:
        "Crisp, freshly prepared salads made with quality ingredients.",
    },
    {
      image: webp.customerFavourites11,
      title: "Fries and",
      title2: "sides",
      price: "£8.99",
      description: "Crispy, golden sides prepared without meat",
    },
  ];

  const highlightCardsData = [
    {
      title: "Clearly stated halal food preparation",
      description:
        "All meat is prepared in line with halal guidelines for complete peace of mind.",
    },
    {
      title: "Dine-in, takeaway, and delivery options",
      description:
        "Enjoy your meal your way — dine in with us, grab a takeaway, or order straight to your door.",
    },
    {
      title: "Vegetarian options available daily",
      description:
        "Vegetarian options available daily — simple, satisfying dishes for those who prefer plant-based meals.",
    },
    {
      title: "Trusted by local Sheffield customers",
      description:
        "Loved by regulars for consistent quality, honest halal food, and great service.",
    },
    {
      title: "Convenient London Road Location",
      description:
        "Easy to find on Sheffield’s London Road, perfect for quick takeaways, relaxed dining, and fast local delivery.",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.halalFoodPreparedWithCare}
        bannerText="Halal food prepared with care"
        bgImage="./LandingPages/bgHeroLandingPage7.png"
        heading1="Halal & Vegetarian"
        heading2="Friendly Restaurant"
        description="Enjoy great food with confidence at Sabir’s — a trusted halal restaurant in Sheffield offering delicious meat and vegetarian options for every taste. Whether you’re dining in, ordering takeaway, or getting food delivered, we make it easy to enjoy flavourful meals that suit your lifestyle."
        button1Text="Order Online"
        button2Text="Explore Menu"
        maxWidth="900px"
      />
      <InfoSection
        heading1="Halal Food"
        heading2="You Can Trust"
        description="At Sabir’s, we clearly and openly follow halal food practices. All our meat dishes are prepared in accordance with halal guidelines, making us a reliable choice for anyone searching for a halal restaurant in Sheffield. Our team is always happy to answer questions about ingredients or food preparation, so you can order with complete confidence."
        description2="If you need more information about our halal process, feel free to contact us directly."
        imageSrc={webp.halalFoodYouCanTrust}
      />
      {/* <InfoSection
        heading1="Group Dining "
        heading2="Made Easy"
        description="Looking for group dining in Sheffield that feels relaxed and effortless? Sabir’s is ideal for group meals of all kinds — birthdays, celebrations, work gatherings, or casual meet-ups with friends."
        description2="Our flexible seating allows groups to sit together comfortably, making it easy to share food, conversations, and memorable moments. Whether it’s a small group or a larger gathering, we ensure everyone feels included."
        imageSrc={webp.groupDiningMadeEasy}
      /> */}
      <RedThemeShowcaseSection
        primaryHeading1="Vegetarian Food Options"
        primaryHeading2="In Sheffield"
        primaryDescription="Looking for vegetarian food in Sheffield? Sabir’s offers a range of vegetarian-friendly choices that don’t compromise on flavour."
        description2="We keep things simple here — for full details and custom options, you can explore our complete food menu online."
        secondaryHeading1="Customer"
        secondaryHeading2="favourites"
        items={showcaseItems}
        button="View More"
      />
      <FeatureHighlights
        heading1="Why Customers"
        heading2="Choose Sabir’s"
        cards={highlightCardsData}
      />
      <InfoSection
        heading1="Halal Grilled Food"
        heading2="You Can Trust"
        description="We proudly serve halal-certified meats, prepared with care and respect at every stage. From sourcing to grilling, our process ensures both quality and authenticity. Whether you’re dining in or ordering takeaway, you can enjoy delicious halal kebabs in Sheffield with complete confidence."
        imageSrc={webp.halalGrilledFoodYouCanTrust}
        reverseOrder={true}
      />
      <CTASection
        headingWhite="Visit or"
        headingRed="Order Today"
        description="Whether you’re searching for a halal restaurant in Sheffield or tasty vegetarian food in Sheffield, Sabir’s is ready to serve you."
        button1Text="Order Now"
        button2Text="Contact Us"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
