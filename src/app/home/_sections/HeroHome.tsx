"use client";

import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";

export default function HeroHome() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    color: colors.secondaryYellow,
    fontSize: fonts.headingPrimary,
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Navbar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            position: "relative",
            overflow: "hidden",
            backgroundColor: colors.primaryRed,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "0 30px",
            }}
          >
            <Typography
              data-aos="fade-left"
              data-aos-duration="1000"
              sx={{ ...headingStyles }}
            >
              taste the world
            </Typography>
            <Box
              sx={{
                zIndex: "10",
                maxWidth: {
                  xs: "350px",
                  md: "500px",
                  lg: "750px",
                  xl: "55vw",
                },
                height: "auto",
                width: "100%",
              }}
            >
              <Image
                data-aos="zoom-out"
                data-aos-duration="1000"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  filter: `drop-shadow(2px 4px 8px ${colors.darkGrey})`,
                  opacity: "100",
                }}
                src={webp.HomeHero}
                alt="SmashBurger"
              />
            </Box>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1000"
              sx={{ ...headingStyles, color: "#ffffff" }}
            >
              of flavour
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
