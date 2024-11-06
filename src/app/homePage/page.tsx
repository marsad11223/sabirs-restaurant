import { Box } from "@mui/material";
import Hero from "./_sections/Hero";
import Marquee from "./_sections/FoodSlider";
// import OurMenu from "./_sections/OurMenu";
import Footer from "@/_components/Footer";
import Navbar from "@/_components/Navbar";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Marquee />
      {/* <OurMenu /> */}
      <Footer />
    </Box>
  );
}
