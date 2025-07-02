"use client";
import React from "react";
import webp from "@/_assets/webp";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurBio() {
  const bioSections = [
    {
      imageSrc: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360506/sabir%27s/desiFood_jgjh8o.webp`,
      heading1: "Fresh Ingredients",
      heading2: "Rich Flavors",
      text: "Every dish is made with high-quality, fresh ingredients that bring out the best in every bite. Our chefs handcraft each recipe to create flavors that stand out and keep you coming back for more. From signature sauces to perfectly seasoned toppings, your taste buds are in for a treat!",
    },
    {
      imageSrc: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360504/sabir%27s/chikenBurgerFries_tftr8q.webp`,
      heading1: "Crafted with Care",
      heading2: "Served with Passion",
      text: "Our food isn’t just made - it’s crafted to perfection. Each ingredient is carefully selected to deliver exceptional flavor and texture. With every dish, we strive to make your meal not only tasty but a memorable experience you’ll savour.",
      reverseOrder: true,
    },
    {
      imageSrc: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360557/sabir%27s/smashBurgerFries_lfp8i4.webp`,
      heading1: "Quality You Can Taste",
      heading2: "in Every Bite",
      text: "Our food isn’t just prepared - it’s expertly crafted. Every ingredient is handpicked for its exceptional quality, ensuring outstanding flavour and texture. With every dish, we aim to make your meal not only delicious but an unforgettable experience to cherish.",
    },
  ];

  return (
    <Box>
      {bioSections.map((section, index) => (
        <OurBioSection
          key={index}
          imageSrc={section.imageSrc}
          heading1={section.heading1}
          heading2={section.heading2}
          text={section.text}
          reverseOrder={section.reverseOrder}
        />
      ))}
    </Box>
  );
}

interface OurBioSectionProps {
  imageSrc: string | StaticImageData;
  heading1: string;
  heading2: string;
  text: string;
  reverseOrder: boolean | undefined;
}

export function OurBioSection({
  imageSrc,
  heading1,
  heading2,
  text,
  reverseOrder,
}: OurBioSectionProps) {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Grid
      sx={{ flexDirection: reverseOrder ? "row-reverse" : "row" }}
      container
    >
      <Grid
        data-aos="fade-left"
        data-aos-duration="1000"
        sx={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          backgroundColor: reverseOrder ? colors.primaryRed : colors.White,
        }}
        item
        xs={12}
        md={6}
      >
        <Box
          sx={{
            padding: {
              xs: "40px 20px",
              sm: "40px",
              md: "50px",
              lg: "80px",
              xl: "100px",
            },
          }}
        >
          <Typography
            sx={{
              ...headingStyles,
              color: reverseOrder
                ? colors.secondaryYellow
                : colors.secondaryYellow,
            }}
          >
            {heading1}
          </Typography>
          <Typography
            sx={{
              ...headingStyles,
              color: reverseOrder ? colors.White : colors.primaryRed,
            }}
          >
            {heading2}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.secondaryTypography,
              color: reverseOrder ? colors.White : colors.obsidianGray,
              paddingTop: "20px",
              maxWidth: "900px",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Grid>
      <Grid data-aos="fade-right" data-aos-duration="1000" item xs={12} md={6}>
        <Box sx={{ height: "100%", width: "100%" }}>
          <Image
            width={720}
            height={475}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={imageSrc}
            alt={heading1}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
