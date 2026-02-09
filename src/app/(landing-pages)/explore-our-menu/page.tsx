import { Box } from "@mui/material";
import HeroLandingPage from "../components/HeroLandingPage";
import Footer from "@/_components/Footer";
import svgs from "@/_assets/svgs";
import InfoSection from "../components/InfoSection";
import webp from "@/_assets/webp";
import CTASection from "../components/CTASection";
import FeatureHighlights from "../components/FeatureHighlights";
import RedThemeShowcaseSection from "../components/RedThemeShowcaseSection";
import FeatureGridSection from "../components/FeatureGridSection";

export default function ExploreOurMenuPage() {
  const highlightCardsData = [
    {
      title: "Burgers & Wraps",
      description:
        "Our burgers & wraps are packed with flavour, from classic grilled patties to juicy chicken fillets and our famous smash burgers.",
      linkText: "View Burgers & Wraps",
      link: "",
    },
    {
      title: "Grills & Mixed Plates",
      description:
        "Discover hearty grills like chicken tikka, mixed kebabs, lamb chops, and our popular mixed grill platters.",
      linkText: "Explore Grills & Specials",
      link: "",
    },
    {
      title: "Pizzas",
      description:
        "Enjoy our range of traditional and specialty pizzas, including meat feast, vegetarian, and unique Sabir’s specials with bold flavours.",
      linkText: "View All Pizzas",
      link: "",
    },
    {
      title: "Veg & Lighter Choices",
      description:
        "For our vegetarian and health-conscious guests, we offer tasty options such as the Halloumi Smash Burger.",
      linkText: "See Veg-Friendly Dishes",
      link: "",
    },
  ];
  const showcaseItems = [
    {
      image: webp.customerFavourites1,
      title: "Abidin Classic",
      title2: "Smash Burger",
      price: "£8.99",
      description:
        "Juicy beef patty, melted cheese, fresh salad, and house sauce.",
    },
    {
      image: webp.popularChoices3,
      title: "Sabir’s Asian",
      title2: "Special Pizza",
      price: "£6.99",
      description: "Loaded with spicy pepperoni slices",
    },
    {
      image: webp.mixKebabPlate,
      title: "Mix Kebab",
      title2: "Plate",
      price: "£8.99",
      description:
        "Tender chicken grilled to perfection with peri peri spices.",
    },
    {
      image: webp.customerFavourites3,
      title: "Chicken Tikka",
      title2: "Grill",
      price: "£9.99",
      description:
        "Juicy chicken grilled over charcoal for a rich, smoky flavour.",
    },
  ];
  return (
    <Box>
      <HeroLandingPage
        icon={svgs.whatWeServe}
        bannerText="What We Serve"
        bgImage="./LandingPages/bgHeroLandingPage9.png"
        heading1="Explore Our Menu"
        heading2="at Sabir’s"
        description="From mouthwatering smash burgers to delicious pizzas, sizzling grills, and fresh veg-friendly options — there’s something to satisfy every craving at Sabir’s."
        // button1Text="Order Online"
        button2Text="Explore Menu"
        maxWidth="900px"
      />
      <InfoSection
        heading1="About Sabir’s"
        heading2="Food Philosophy"
        description="At Sabir’s, we’re proud to serve fresh, high-quality ingredients crafted into bold and delicious meals. As a family-run business, we bring passion and tradition to every dish."
        imageSrc={webp.aboutSabirsFoodPhilosophy}
        reverseOrder={true}
        button="Learn More"
      />
      <FeatureHighlights
        heading1="Choose Your"
        heading2="Meal Category"
        cards={highlightCardsData}
        button="View All Categories"
      />
      <RedThemeShowcaseSection
        primaryHeading1="Our Customers’"
        primaryHeading2="Favorites"
        items={showcaseItems}
        description2="Try them all and find your new favourite!"
        button="View More"
      />
      <CTASection
        headingWhite="Easy Ways"
        headingRed="to Order"
        description="Ordering your Sabir’s favourites is quick and easy. Choose collection for Sheffield or Rotherham:"
        button1Text="Order For Sheffield"
        button2Text="Order For Rotherham"
      />
      <Footer applyBorderTop={false} />
    </Box>
  );
}
