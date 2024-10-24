"use client";

import { useState, useEffect, useRef } from "react";
import pngs from "@/_assets/pngs";
import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import { scrollToId } from "@/app/utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface FoodCardProps {
  title: string;
  image: StaticImageData;
}

const foodItems: FoodCardProps[] = [
  {
    title: "smash",
    // title: "Wrap",
    image: webp.SmashBurger,
    // image: webp.Wrap,
  },

  {
    title: "smash",
    // title: "French fries",
    image: webp.SmashBurger,
    // image: webp.FrenchFries,
  },
  {
    title: "smash",
    image: webp.SmashBurger,
  },
  {
    // title: "chicken burger",
    title: "smash",
    image: webp.SmashBurger,
    // image: webp.ChickenBruger,
  },
  {
    // title: "Shake",
    title: "smash",
    image: webp.SmashBurger,
    // image: webp.Shake,
  },
  {
    // title: "Wrap",
    title: "smash",
    image: webp.SmashBurger,
    // image: webp.Wrap,
  },

  {
    // title: "French fries",
    title: "smash",
    image: webp.SmashBurger,
    // image: webp.FrenchFries,
  },
  {
    title: "smash",
    image: webp.SmashBurger,
  },
  {
    // title: "chicken burger",
    title: "smash",
    image: webp.SmashBurger,
    // image: webp.ChickenBruger,
  },
  {
    // title: "Shake",
    title: "smash",
    image: webp.SmashBurger,
    // image: webp.Shake,
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
      breakpoint: 1600,
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
      breakpoint: 992,
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.scrollTo({
              top: section?.offsetTop,
              behavior: "smooth",
            });
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed (0.5 means half of the section must be visible)
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <Box
        // ref={sectionRef}
        sx={{
          backgroundColor: "#ffffff",
          padding: { xs: "30px 0 26px 0", lg: "35px 0 31px 0" },
          marginTop: { md: "-4px" },
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
              color: "#851A1D",
              fontSize: { xs: "18px", sm: "25px", md: "28px", lg: "32px" },
              fontWeight: "600",
              fontFamily: "Oswald",
              textTransform: "uppercase",
              lineHeight: "30px",
            }}
          >
            Taste the Flavor!!
          </Typography>
        </Box>
        <Slider {...settings}>
          {foodItems.map((item, index) => (
            <Box
              sx={{ marginTop: { xs: "10px", sm: "15px", md: "20px" } }}
              key={index}
            >
              <FoodCard title={item.title} image={item.image} />
            </Box>
          ))}
        </Slider>
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
        "&:hover": {
          // transform: "scale(1.1)",
          // zIndex: "1000",
        },
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
        }}
      >
        {/* Image */}
        <Box
          sx={{
            height: { xs: "120px", sm: "140px", md: "160px" },
            width: { xs: "120px", sm: "140px", md: "160px" },
            paddingBottom: { xs: "5px", sm: "10px" },
            transition: "filter 0.5s ease-in , transform 0.5s ease-in",
            "&:hover": {
              WebkitFilter: "grayscale(100%)",
              filter:
                "grayscale(100%) drop-shadow(0 4px 10px rgba(50, 50, 50, 0.7))",
              // transform: "scale(1.1)",
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
            color: "#ffffff",
            backgroundColor: "#851A1D",
            padding: "0 7px",
            textTransform: "upperCase",
            fontFamily: "Raleway",
            transition: "background-color 1.2s ease, color 0.2s ease-in",
            "&:hover": {
              backgroundColor: "#000",
              color: "#ffcc00",
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
