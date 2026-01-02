"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "./FeatureCard";
import { StaticImageData } from "next/image";

export interface FeatureItem {
  icon: StaticImageData | string;
  firstWord: string;
  secondWord: string;
  description: string;
}

export interface FeatureGridSectionProps {
  heading1: string;
  heading2: string;
  description: string;
  features: FeatureItem[];
  backgroundColor?: string;
  backgroundImage?: string;
  buttonText?: string;
}

export default function FeatureGridSection({
  heading1,
  heading2,
  description,
  features,
  backgroundColor = colors.White,
  backgroundImage,
  buttonText,
}: FeatureGridSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box sx={{ width: "100%", backgroundColor: backgroundColor }}>
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
          ...(backgroundImage && {
            backgroundImage: backgroundImage,
            backgroundSize: "100% 70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }),
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
            {heading1}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.primaryRed,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {heading2}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: colors.darkGrey,
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Four Feature Cards */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "15px", md: "20px", lg: "30px" },
            rowGap: "40px !important",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              // key={index}
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
