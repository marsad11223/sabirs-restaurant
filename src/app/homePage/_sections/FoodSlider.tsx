"use client";

import { useState, useEffect, useRef } from "react";
import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import { scrollToId } from "@/app/utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fonts, colors } from "@/app/utils/themes";

interface FoodCardProps {
  title: string;
  image: StaticImageData;
}

const foodItems: FoodCardProps[] = [
  {
    title: "Wrap",
    image: webp.Wrap,
  },

  {
    title: "French fries",
    image: webp.Fries,
  },
  {
    title: "smash Burger",
    image: webp.SmashBurger,
  },
  {
    title: "chicken burger",
    image: webp.ChickenBruger,
  },
  {
    title: "Shake",
    image: webp.Shake,
  },
  {
    title: "Wrap",
    image: webp.Wrap,
  },

  {
    title: "French fries",
    image: webp.Fries,
  },
  {
    title: "smash Burger",
    image: webp.SmashBurger,
  },
  {
    title: "chicken burger",
    image: webp.ChickenBruger,
  },
  {
    title: "Shake",
    image: webp.Shake,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
      },
    },
  ],
};

export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.White,
          padding: { xs: "40px 0", lg: "50px 0", xl: "64px 0" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: colors.primaryRed,
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              fontWeight: "400",
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            have a bite
          </Typography>
        </Box>
        <Box sx={{ paddingTop: { xs: "40px", lg: "50px", xl: "64px" } }}>
          <Slider {...settings}>
            {foodItems.map((item, index) => (
              <Box key={index}>
                <FoodCard title={item.title} image={item.image} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export const FoodCard = ({ title, image }: FoodCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        transition: "transform 0.3s",
        "&:hover": {},
      }}
    >
      <Box
        onClick={() => scrollToId("location")}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          gap: { xs: "10px", sm: "15px", md: "30px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            height: { xs: "100px", sm: "120px", md: "140px", lg: "180px" },
            maxWidth: { xs: "120px", sm: "140px", md: "160px", lg: "200px" },
            width: "100%",
            transition: "filter 0.5s ease-in , transform 0.5s ease-in",
            "&:hover": {
              WebkitFilter: "grayscale(100%)",
              filter:
                "grayscale(100%) drop-shadow(0 4px 10px rgba(50, 50, 50, 0.7))",
              zIndex: "1000",
              position: "relative",
            },
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={image}
            alt={title}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            fontWeight: "600",
            color: colors.White,
            backgroundColor: colors.primaryRed,
            padding: "0 7px",
            textTransform: "upperCase",
            transition: "background-color 1.2s ease, color 0.2s ease-in",
            "&:hover": {
              backgroundColor: colors.black,
              color: colors.secondaryYellow,
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
