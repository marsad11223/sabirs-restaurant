"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "../../components/FeatureCard";

export default function SabirsGrillYourChoice() {
  const features = [
    {
      icon: svgs.expertChefs,
      firstWord: "EXPERT",
      secondWord: "CHEFS",
      description:
        "Trained specialists perfecting every burger with precision.",
    },
    {
      icon: svgs.premiumQuality,
      firstWord: "PREMIUM",
      secondWord: "QUALITY",
      description: "Only the finest ingredients sourced locally.",
    },
    {
      icon: svgs.madeWithLove,
      firstWord: "MADE",
      secondWord: "WITH LOVE",
      description:
        "Every item is crafted with passion and attention to detail.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: colors.secondaryYellow,
        padding: {
          xs: "20px 30px",
          sm: "30px 50px",
          md: "40px 100px",
          lg: "40px 150px",
          xl: "40px 200px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: "16px", md: "20px" },
          maxWidth: "1600px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Left Side - Deal Info */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px", md: "40px" },
            alignItems: "flex-start",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            data-aos="fade-right"
            data-aos-duration="400"
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.primaryRed,
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            DEAL!!!
          </Typography>
          <Box data-aos="zoom-in" data-aos-duration="400">
            <Typography
              sx={{
                fontSize: fonts.h5,
                fontWeight: fonts.h5,
                color: colors.White,
                fontFamily: '"Bebas Neue", sans-serif',
              }}
            >
              MEAL DEAL: 2 BURGERS + 2 FRIES + 2 DRINKS
            </Typography>
            <Typography
              sx={{
                fontSize: fonts.p5,
                fontWeight: fonts.p5,
                color: colors.primaryRed,
              }}
            >
              Only £19.99 - Save £8!
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Claim Now Button */}
        <Box
          data-aos="fade-left"
          data-aos-duration="400"
          component="button"
          sx={{
            backgroundColor: colors.primaryRed,
            color: "#FFD40D",
            border: "none",
            borderRadius: "10px",
            padding: {
              xs: "15px 30px",
              md: "20px 40px",
            },
            fontSize: fonts.p5,
            cursor: "pointer",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "#A01F23",
              transform: "translateY(-2px)",
              boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          Claim Now
        </Box>
      </Box>
    </Box>
  );
}
