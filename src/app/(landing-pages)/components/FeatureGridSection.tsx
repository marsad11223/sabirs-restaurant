"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "./FeatureCard";
import { StaticImageData } from "next/image";

export interface FeatureItem {
  icon: StaticImageData | string;
  firstWord: string;
  secondWord: string;
  description?: string;
  onClick?: () => void;
}

export interface FeatureGridSectionProps {
  heading1: string;
  heading2: string;
  description?: string;
  features: FeatureItem[];
  backgroundColor?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  maxWidth?: string;
}

export default function FeatureGridSection({
  heading1,
  heading2,
  description,
  features,
  backgroundColor = colors.White,
  backgroundImage,
  buttonText,
  buttonOnClick,
  maxWidth = "1400px",
}: FeatureGridSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: backgroundColor,
        padding: sectionPadding,
        ...(backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 70%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }),
      }}
    >
      {/* Main Content Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "30px", sm: "40px", md: "50px" },
          maxWidth: maxWidth,
          margin: "auto",
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
          {description && (
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
          )}
        </Box>

        {/* Four Feature Cards */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
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
              icon={feature.icon}
              firstWord={feature.firstWord}
              secondWord={feature.secondWord}
              description={feature.description}
              onClick={feature.onClick}
            />
          ))}
        </Box>

        {/* Button */}
        {buttonText && (
          <Box>
            <Box
              component="button"
              onClick={buttonOnClick}
              sx={{
                backgroundColor: colors.primaryRed,
                color: "#FFFFFF",
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
                minWidth: "210px",
                fontWeight: "700",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              {buttonText}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
