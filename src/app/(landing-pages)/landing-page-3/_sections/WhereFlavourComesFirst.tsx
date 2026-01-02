"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "../../components/FeatureCard";

export default function WhereFlavourComesFirst() {
  const features = [
    {
      icon: svgs.cookedFreshToOrder,
      firstWord: "Cooked fresh",
      secondWord: "to order",
      description: "Prepared fresh when you order, never pre-made.",
    },
    {
      icon: svgs.grilledOrSmashed,
      firstWord: "top tier",
      secondWord: "Quality",
      description:
        "Made with quality beef, tender chicken or delicious vegies.",
    },
    {
      icon: svgs.topTierQuality,
      firstWord: "Grilled or",
      secondWord: "smashed",
      description: "Grilled or smashed on a hot plate for maximum flavour",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box sx={{ width: "100%", backgroundColor: colors.White }}>
      {/* Main Content Area */}
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "60px 40px",
            lg: "80px 60px",
            xl: "100px 80px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "30px", sm: "40px", md: "50px" },
        }}
      >
        {/* Title Section */}
        <Box sx={{ textAlign: "center", maxWidth: "680px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            Where Flavour
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: "#851A1D",
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            Comes First
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: "#414143",
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            At Sabir’s, we’re more than just a place to eat — we’re a dining
            destination that brings bold, comforting flavours to every plate:
          </Typography>
        </Box>

        {/* Four Feature Cards */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            // gridTemplateColumns: {
            //   xs: "1fr",
            //   sm: "repeat(2, 1fr)",
            //   md: "repeat(4, 1fr)",
            // },
            gap: { xs: "15px", md: "20px", lg: "30px" },
            rowGap: "40px !important",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              firstWord={feature.firstWord}
              secondWord={feature.secondWord}
              description={feature.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
