"use client";

import { Box, Typography, Grid } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HighlightCard from "./HighlightCard";

export interface HighlightCardItem {
  title: string;
  description: string;
}

interface FeatureHighlightsProps {
  heading1: string;
  heading2: string;
  cards: HighlightCardItem[];
  redTheme?: boolean;
}

export default function FeatureHighlights({
  heading1,
  heading2,
  cards,
  redTheme,
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
                  redTheme={true}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
