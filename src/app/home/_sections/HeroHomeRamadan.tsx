"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";
import svgs from "@/_assets/svgs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function HeroHome() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    color: colors.secondaryYellow,
    fontSize: {
      xs: "52px",
      sm: "60px",
      md: "72px",
      lg: "96px",
    },
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexShrink: 0 }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(./bgHeroHomeRamadan.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: {
            xs: "20px",
            sm: "20px 30px",
            md: "20px 80px",
            lg: "20px 80px",
            xl: "25px 120px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1360px", margin: "auto", width: "100%" }}>
          {/* <Image /> */}
        </Box>
      </Box>
    </Box>
  );
}
