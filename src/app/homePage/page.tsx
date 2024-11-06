import { Box } from "@mui/material";
import Hero from "./_sections/Hero";
// import Marquee from "./_sections/FoodItemMarquee";
// import OurMenu from "./_sections/OurMenu";
import Footer from "@/_components/footer/Footer";
import Navbar from "@/_components/navbar/Navbar";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      {/* <Marquee />
      <OurMenu /> */}
      <Footer />
    </Box>
  );
}
