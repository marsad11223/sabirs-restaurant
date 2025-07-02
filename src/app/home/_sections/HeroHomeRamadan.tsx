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
import webp from "@/_assets/webp";

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
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
          backgroundImage:
            "url(https://res.cloudinary.com/ddixiuh7h/image/upload/v1751361356/sabir%27s/backgroundImages/bgHeroHomeRamadan_mvnqqo.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: {
            xs: "50px 30px",
            sm: "60px 30px",
            md: "60px 80px",
            lg: "60px 80px",
            xl: "60px 120px",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "1360px",
            margin: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "30px", md: "50px" },
          }}
        >
          {/* logo  */}
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "140px", sm: "150px", lg: "250", xl: "350px" },
              margin: "auto",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={svgs.LogoRed}
              alt="logo red"
            />
          </Box>
          {/* main image ramadan mubrik */}
          <Box
            sx={{
              width: { xs: "100%", xl: "52vw" },
              maxWidth: {
                xs: "300px",
                sm: "600px",
                md: "800px",
                lg: "900px",
                xl: "1200px",
              },

              margin: "auto",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360542/sabir%27s/ramzan_b8hxz2.webp`}
              alt="ramzan image"
            />
          </Box>
          {/* textual content */}
          <Box sx={{ textAlign: "center", margin: "auto" }}>
            <Typography
              sx={{
                color: "#333333",
                fontWeight: "900",
                fontSize: fonts.headingSecondary,
              }}
            >
              Book Your Table Now
            </Typography>
            <Typography
              sx={{
                color: "#333333",
                fontSize: fonts.primaryTypography,
              }}
            >
              Call or Text: 0774 3007 329
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
