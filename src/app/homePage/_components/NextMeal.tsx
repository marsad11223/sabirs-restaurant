"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Button from "@/_components/Button";
import webp from "@/_assets/webp";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Uncomment these imports
import "slick-carousel/slick/slick-theme.css"; // Uncomment these imports

export default function NextMeal() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    fontWeight: "400",
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Box
      sx={{
        backgroundColor: "#851A1D",
        padding: "20px 150px",
        borderRadius: { xs: "0 0 40px 40px", md: "0 0 80px 80px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <Typography sx={{ ...headingStyles, color: colors.secondaryYellow }}>
            Come Find Your
          </Typography>
          <Typography sx={{ ...headingStyles, color: colors.White }}>
            next meal
          </Typography>
          <Typography
            sx={{
              color: colors.White,
              fontSize: fonts.secondaryTypography,
              lineHeight: fonts.secondaryTypography,
              marginTop: { xs: "10px", xl: "24px" },
            }}
          >
            Discover a menu crafted to satisfy every craving! Dive into our
            range of signature dishes, seasonal specials, and classic
            favorites—all made to order just for you. Take a look and let your
            taste buds lead the way!"
          </Typography>
          <Box sx={{ marginTop: { xs: "20px", xl: "40px" } }}>
            <Button>Get In Touch</Button>
          </Box>
        </Box>
        {/* Slider with cards */}
        <Box sx={{ height: "450px", width: "410px" }}>
          <Slider {...settings}>
            <NextMealSlider />
            <NextMealSlider />
            <NextMealSlider />
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export function NextMealSlider() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "30px",
      }}
    >
      <Box sx={{ height: "370px", width: "370px" }}>
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={webp.CarouselChickenBurger}
          alt="CarouselChickenBurger"
        />
      </Box>
      <Typography
        sx={{
          fontSize: fonts.tertiaryTypography,
          color: colors.primaryRed,
        }}
      >
        Hot & Spicy Chicken Burger
      </Typography>
    </Box>
  );
}
