"use client";

import { useState, useEffect } from "react";
import pngs from "@/_assets/pngs";
import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

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

  const [play, setPlay] = useState(true);

  useEffect(() => {
    const togglePlayState = () => {
      setPlay(false);
      setTimeout(() => {
        setPlay(true);
      }, 2000);
    };

    const intervalId = setInterval(togglePlayState, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(50% 95.48% at 50% 50%, #851A1D 0%, #560508 71%)",
          padding: "20px 0 8px 0",
          marginTop: { md: "-4px" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "10px", sm: "15px", md: "20px" },
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
        <Marquee
          gradient={false}
          speed={100}
          play={play}
          pauseOnHover={true} // Optional: Pause on hover
        >
          {foodItems.map((item, index) => (
            <FoodCard key={index} title={item.title} image={item.image} />
          ))}
        </Marquee>
      </Box>
    </>
  );
}

export const FoodCard = ({ title, image }: FoodCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // maxWidth: {
        //   xs: "150px",
        //   sm: "220px",
        //   md: "268px",
        //   lg: "30vw",
        //   xl: "300px",
        // },
        padding: { xs: "0 15px", sm: "0 25px", lg: "0 30px", xl: "0 50px" },
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
  );
};
