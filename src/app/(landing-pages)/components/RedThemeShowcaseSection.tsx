"use client";

import { Box, Typography } from "@mui/material";
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
  secondaryHeading1: string;
  secondaryHeading2: string;
  items?: ShowcaseCardItem[];
  button?: string;
}

export default function RedThemeShowcaseSection({
  primaryHeading1,
  primaryHeading2,
  primaryDescription,
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: "24px", sm: "28px", md: "24px", lg: "32px" },
            maxWidth: "1440px",
            margin: "0 auto",
            marginBottom: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
          }}
        >
          {items.map((item, index) => (
            // <FoodCard
            //   key={index}
            //   image={item.image}
            //   title={item.title}
            //   title2={item.title2}
            //   price={item.price}
            //   description={item.description}
            // />
            <ShowcaseCard
              key={index}
              image={item.image}
              title={item.title}
              title2={item.title2}
              price={item.price}
              description={item.description}
            />
          ))}
        </Box>
        {/* bottom button */}
        {button && (
          <Box
            component="button"
            sx={{
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
