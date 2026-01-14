"use client";

import { Box, Typography, Grid } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HighlightCard from "./HighlightCard";
import { StaticImageData } from "next/image";

export interface HighlightCardItem {
  title: string;
  description: string;
  linkText?: string;
  link?: string;
  image?: string | StaticImageData;
}

interface FeatureHighlightsProps {
  heading1: string;
  heading2: string;
  cards: HighlightCardItem[];
  redTheme?: boolean;
  description?: string;
  button?: string;
}

export default function FeatureHighlights({
  heading1,
  heading2,
  cards,
  redTheme = false,
  description,
  button,
}: FeatureHighlightsProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: redTheme ? colors.primaryRed : "#ffffff",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
          padding: sectionPadding,
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
              color: redTheme ? "#ffffff" : colors.primaryRed,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {heading2}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              color: redTheme ? "#ffffff" : "#414143",
              marginTop: { xs: "10px", md: "15px" },
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Highlight Cards Grid */}
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 12 }}
          // justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            maxWidth: "1240px",
            rowGap: { xs: "20px", md: "40px" },
            marginTop: { xs: "40px", md: "80px" },
            marginX: "auto",
            marginRight: "0px",
          }}
        >
          {cards.map((card, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              sx={{ height: "-webkit-fill-available" }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  maxWidth: "510px",
                  height: "-webkit-fill-available",
                }}
              >
                <HighlightCard
                  title={card.title}
                  description={card.description}
                  redTheme={redTheme}
                  linkText={card.linkText}
                  link={card.link}
                  image={card.image}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        {button && (
          <Box
            component="button"
            sx={{
              backgroundColor: colors.primaryRed,
              color: "#FFD40D",
              border: "none",
              borderRadius: "10px",
              padding: { xs: "15px 30px", md: "20px 40px" },
              fontSize: fonts.p5,
              cursor: "pointer",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              fontWeight: "700",
              minWidth: "210px",
              width: "fit-content",
              marginTop: { xs: "40px", md: "60px", lg: "80px" },
              "&:hover": {
                backgroundColor: "#A01F23",
                transform: "translateY(-2px)",
                boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
              },
              "&:active": {
                transform: "translateY(0)",
              },
              margin: "auto",
              display: "block",
            }}
          >
            {button}
          </Box>
        )}
      </Box>
    </Box>
  );
}
