"use client";

import { Box, Typography, Grid } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import ShowcaseCard from "./ShowcaseCard";
import { StaticImageData } from "next/image";
// import { RedThemeShowcaseSectionProps } from "./types";

export interface ShowcaseCardItem {
  image: StaticImageData;
  title: string;
  title2?: string;
  price?: string;
  description?: string;
  button?: string;
}

export interface RedThemeShowcaseSectionProps {
  primaryHeading1: string;
  primaryHeading2: string;
  primaryDescription?: string;
  description2?: string;
  secondaryHeading1: string;
  secondaryHeading2: string;
  items?: ShowcaseCardItem[];
  button?: string;
}

export default function RedThemeShowcaseSection({
  primaryHeading1,
  primaryHeading2,
  primaryDescription,
  description2,
  secondaryHeading1,
  secondaryHeading2,
  items = [],
  button,
}: RedThemeShowcaseSectionProps) {
  return (
    <Box sx={{ backgroundColor: colors.primaryRed }}>
      <Box
        sx={{
          backgroundImage: "url(./bgCustomerFavoritesAlwaysFresh.png)",
          padding: sectionPadding,
          overflow: "hidden",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Primary Header */}
        <Box
          sx={{
            marginBottom: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {primaryHeading1}
          </Typography>

          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.White,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {primaryHeading2}
          </Typography>

          {primaryDescription && (
            <Typography
              sx={{
                fontSize: fonts.p4,
                lineHeight: fonts.p4,
                color: colors.White,
                marginTop: { xs: "16px", md: "20px" },
                maxWidth: "590px",
                margin: "auto",
              }}
            >
              {primaryDescription}
            </Typography>
          )}
        </Box>

        {/* Secondary Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: { xs: "20px", md: "40px" },
          }}
        >
          <Typography
            sx={{
              fontSize: fonts.h4,
              lineHeight: fonts.h4,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {secondaryHeading1}
          </Typography>

          <Typography
            sx={{
              fontSize: fonts.h4,
              lineHeight: fonts.h4,
              color: colors.White,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {secondaryHeading2}
          </Typography>
        </Box>

        {/* Cards Grid */}
        {/* Cards Grid */}
        <Box
          sx={{
            // margin: "auto",
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, sm: 3.5, md: 3, lg: 4 }}
            sx={{
              maxWidth: "1440px",
              justifyContent: "center",
              margin: "auto !important",
            }}
          >
            {items.map((item, index) => (
              <Grid
                item
                key={index}
                xs={12}
                md={6}
                lg={3}
                sx={{
                  justifyContent: "center",
                }}
              >
                <ShowcaseCard
                  image={item.image}
                  title={item.title}
                  title2={item.title2}
                  price={item.price}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography
          sx={{
            fontSize: fonts.p4,
            lineHeight: fonts.p4,
            color: colors.White,
            marginTop: { xs: "30px", md: "40px" },
            maxWidth: "590px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          {description2}
        </Typography>

        {/* bottom button */}
        {button && (
          <Box
            component="button"
            sx={{
              marginTop: { xs: "40px", md: "60px", lg: "80px" },
              backgroundColor: colors.secondaryYellow,
              color: "#851A1D",
              border: "none",
              borderRadius: "10px",
              padding: {
                xs: "15px 30px",
                md: "20px 40px",
              },
              height: "56px",
              fontSize: fonts.p5,
              lineHeight: fonts.p5,
              fontWeight: "700",
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#FFE033",
                transform: "translateY(-2px)",
                boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
              },
              "&:active": {
                transform: "translateY(0)",
              },
              minWidth: "200px",

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
