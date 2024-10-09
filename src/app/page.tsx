// import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from "./page.module.css";
import Navbar from "@/_components/navbar/Navbar";
import HeroSection from "./homePage/hero/Hero";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HeroSection/>
    </Box>
  );
}
