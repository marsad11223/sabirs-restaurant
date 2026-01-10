import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import FeatureGridSection from "../components/FeatureGridSection";
import CTASection from "../components/CTASection";
import FeatureHighlights from "../components/FeatureHighlights";
import RedThemeShowcaseSection from "../components/RedThemeShowcaseSection";

export default function LandingPage5() {
  const highlightCardsData = [
    {
      title: "Charcoal & flame-grilled meats",
      description:
        "Our meats are cooked over real charcoal and open flames, creating a deep smoky flavour and perfect char you can’t achieve any other way.",
    },
    {
      title: "Bold marinades and traditional spices.",
      description:
        "Bold marinades and traditional spices, carefully blended and slow-marinated to enhance flavour and bring out the rich, authentic taste in every grilled bite.",
    },
    {
      title: "Authentic kebabs made fresh daily",
      description:
        "Authentic kebabs made fresh daily, marinated with traditional spices and grilled over open flames for rich, smoky flavour.",
    },
    {
      title: "Convenient location in Sheffield.",
      description:
        "Convenient location in Sheffield, making it easy to enjoy freshly grilled food anytime.",
    },
    {
      title: "100% halal meat options.",
      description:
        "100% halal meat options, prepared according to authentic halal standards",
    },
    {
      title: "Comfortable dine-in & quick takeaway",
      description:
        "Comfortable dine-in atmosphere with quick takeaway for relaxed meals or busy days.",
    },
  ];
  const showcaseItems = [
    {
      image: webp.customerFavourites5,
      title: "Chicken Shish",
      title2: "Kebab",
      price: "£8.99",
      description: "Tender chicken breast marinated for 24 hours.",
    },
    {
      image: webp.customerFavourites6,
      title: "Mixed Grill",
      title2: "Platters",
      price: "£3.99",
      description:
        "The ultimate grill experience. Perfect for the seriously hungry.",
    },
    {
      image: webp.customerFavourites7,
      title: "Charcoal-Grilled",
      title2: "Chicken",
      price: "£8.99",
      description:
        "Juicy chicken grilled over charcoal for a rich, smoky flavour.",
    },
    {
      image: webp.customerFavourites8,
      title: "Lamb",
      title2: "Kebabs",
      price: "£9.99",
      description: "Premium cuts of lamb marinated in Middle Eastern spices.",
    },
  ];

  return (
    <Box>
      <HeroLandingPage
        icon={svgs.flameGrilledSpicedMeat}
        bannerText="flame grilled meat with traditional spices"
        bgImage="./LandingPages/bgHeroLandingPage5.png"
        heading1="Sheffield’s Home of"
        heading2="Flame-Grilled meat"
        description="Welcome to Sabir’s, a trusted grill restaurant in Sheffield known for expertly cooked kebabs, charcoal-grilled meats, and bold flavours. Every dish is freshly prepared using halal meats and grilled to perfection for that unmistakable smoky taste."
        button1Text="Order Online"
        button2Text="View Grill Menu"
      />
      <InfoSection
        heading1="A True Grill Restaurant"
        heading2="in Sheffield"
        description="At Sabir’s, grilling isn’t just cooking — it’s a craft. Our chefs specialise in flame-grilled meats and traditional kebabs, delivering rich flavour, perfect char, and juicy texture in every bite."
        imageSrc={webp.aTrueGrillRestaurantInSheffield}
      />
      <FeatureHighlights
        heading1="Why customers"
        heading2="love our grill"
        cards={highlightCardsData}
      />
      <RedThemeShowcaseSection
        primaryHeading1="Flame-Grilled Meats"
        primaryHeading2="Cooked to Perfection"
        primaryDescription="Our menu is built around the grill. From tender chicken to richly seasoned lamb, every dish is cooked over open flames to lock in flavour and create a perfect char."
        secondaryHeading1="Customer"
        secondaryHeading2="favourites"
        items={showcaseItems}
        button="View More"
      />
      <InfoSection
        heading1="Halal Grilled Food"
        heading2="You Can Trust"
        description="We proudly serve halal-certified meats, prepared with care and respect at every stage. From sourcing to grilling, our process ensures both quality and authenticity. Whether you’re dining in or ordering takeaway, you can enjoy delicious halal kebabs in Sheffield with complete confidence."
        imageSrc={webp.halalGrilledFoodYouCanTrust}
        reverseOrder={true}
      />
      <CTASection
        headingWhite="Craving authentic"
        headingRed="grilled food?"
        description="Visit Sabir’s or order online for freshly prepared kebabs and grilled meats."
        button1Text="Go To Main Page"
        button2Text="Our Menu"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
