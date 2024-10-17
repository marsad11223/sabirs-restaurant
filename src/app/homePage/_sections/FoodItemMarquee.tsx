"use client";

import { useState, useEffect } from "react";
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

export default function HeroSection() {
  const foodItems: FoodCardProps[] = [
    {
      title: "12inch Garlic Bread ....",
      image: webp.GarlicBread,
    },

    {
      title: "2Pc Chicken & Fries",
      image: webp.Fries,
    },
    {
      title: "Flamin Fusion Burger",
      image: webp.Burger,
    },
    {
      title: " Quarter Peri Peri...",
      image: webp.LegPiece,
    },
    {
      title: "Daal",
      image: webp.Daal,
    },
    {
      title: "12inch Garlic Bread ....",
      image: webp.GarlicBread,
    },

    {
      title: "2Pc Chicken & Fries",
      image: webp.Fries,
    },
    {
      title: "Flamin Fusion Burger",
      image: webp.Burger,
    },
    {
      title: " Quarter Peri Peri...",
      image: webp.LegPiece,
    },
    {
      title: "Daal",
      image: webp.Daal,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          autoplaySpeed: 2300,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 2300,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2300,
        },
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(50% 95.48% at 50% 50%, #851A1D 0%, #560508 71%)",
          padding: "30px 0 26px 0",
          marginTop: { md: "-4px" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "10px", sm: "15px", md: "20px" },
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { xs: "18px", sm: "25px", md: "28px", lg: "32px" },
              fontWeight: "600",
              fontFamily: "Oswald",
            }}
          >
            OUR CUISINE COLLECTION
          </Typography>
        </Box>
        <Slider {...settings}>
          {foodItems.map((item, index) => (
            <div key={index}>
              <FoodCard title={item.title} image={item.image} />
            </div>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export const FoodCard = ({ title, image }: FoodCardProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        onClick={() => scrollToId("location")}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          // width: {
          //   xs: "150px",
          //   sm: "220px",
          //   md: "268px",
          //   lg: "300px",
          // lg: "20vw",
          // xl: "16vw",
          // },
          // width: "100%",
          // padding: { xs: "0 15px", sm: "0 25px", lg: "0 30px", xl: "0 50px" },
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "145px", sm: "200px", md: "268px" },
            height: "auto",
            maxHeight: "268px",
            paddingBottom: { xs: "8px", sm: "15px", md: "30px" },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt={title}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            fontWeight: "600",
            color: "#FFD40D",
            backgroundColor: "#000000",
            padding: "0 7px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
