"use client";

import { Box, Typography, Grid } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import ShowcaseCard from "./ShowcaseCard";
import { StaticImageData } from "next/image";
// import { RedThemeShowcaseSectionProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderArrow from "@/_components/SliderArrow";
import svgs from "@/_assets/svgs";

export interface ShowcaseCardItem {
  image: StaticImageData;
  title: string;
  title2?: string;
  price?: string;
  description?: string;
  button?: string;
  onClick?: () => void;
}

export interface RedThemeShowcaseSectionProps {
  primaryHeading1: string;
  primaryHeading2: string;
  primaryDescription?: string;
  description2?: string;
  secondaryHeading1?: string;
  secondaryHeading2?: string;
  items?: ShowcaseCardItem[];
  button?: string;
  buttonOnClick?: () => void;
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
  buttonOnClick,
}: RedThemeShowcaseSectionProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <SliderArrow
        image={svgs.sliderArrow}
        onClick={() => console.log("Left clicked")}
        sx={{
          left: "calc(50% + 10px )",
          bottom: { xs: "-55px", sm: "-80px" },
        }}
      />
    ),

    // left arrow
    prevArrow: (
      <SliderArrow
        image={svgs.sliderArrow}
        onClick={() => console.log("Left clicked")}
        sx={{
          left: "calc(50% - 10px )",
          bottom: { xs: "-55px", sm: "-80px" },
          transform: "translateX(-100%) rotate(180deg)",
        }}
      />
    ),
  };

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
            display: { xs: "none", lg: "grid" },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: "24px", sm: "28px", md: "24px", lg: "32px" },
            maxWidth: "1440px",
            margin: "0 auto",
            marginBottom: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
          }}
        >
          {items.map((item, index) => (
            <ShowcaseCard
              key={index}
              image={item.image}
              title={item.title}
              title2={item.title2}
              price={item.price}
              description={item.description}
              onClick={item.onClick}
            />
          ))}
        </Box>
        {/* Food Cards Slider */}
        <Box
          sx={{
            display: { xs: "block", lg: "none" },
            maxWidth: "1440px",
            margin: "0 auto",
            paddingBottom: { xs: "40px", sm: "60px", lg: "unset" },
          }}
        >
          <Slider {...settings}>
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  paddingX: "10px",
                  margin: "auto",
                  width: "auto",
                }}
              >
                <ShowcaseCard
                  image={item.image}
                  title={item.title}
                  title2={item.title2}
                  price={item.price}
                  description={item.description}
                  onClick={item.onClick}
                />
              </Box>
            ))}
          </Slider>
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
            onClick={buttonOnClick}
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
