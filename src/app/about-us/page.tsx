import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import AboutUsContent from "./_sections/AboutUsContent";

export default function AboutUs() {
  return (
    <Box>
      <Navbar />
      <AboutUsContent />
      <Footer />
    </Box>
  );
}
