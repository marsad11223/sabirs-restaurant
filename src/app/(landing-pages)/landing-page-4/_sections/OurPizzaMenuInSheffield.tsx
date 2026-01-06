"use client";
import { Box, Typography, Grid } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";
import webp from "@/_assets/webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FoodCard from "../../components/FoodCard";
import MenuTickets from "../../components/MenuTickets";

export default function OurPizzaMenuInSheffield() {
  const foodItems = [
    {
      image: webp.popularChoices1,
      title: "Chicken Tikka",
      title2: "Pizza",
      price: "£8.99",
      description: "Juicy chicken with bold tikka flavour.",
    },
    {
      image: webp.popularChoices2,
      title: "Pepperoni ",
      title2: "Pizza",
      price: "£3.99",
      description: "Loaded with spicy pepperoni slices",
    },
    {
      image: webp.popularChoices3,
      title: "Meat Feast",
      title2: "Pizza",
      price: "£8.99",
      description: "A rich mix of premium meats.",
    },
    {
      image: webp.popularChoices4,
      title: "MARGHERITA",
      title2: "PIZZA",
      price: "£9.99",
      description:
        "Classic thin crust with fresh tomatoes, mozzarella, and basil.",
    },
  ];

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
        {/* Header Section */}
        <Box
          sx={{
            marginBottom: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
            textAlign: "center",
          }}
        >
          <Box>
            {/* Main Title */}
            <Typography
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: colors.secondaryYellow,
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
              }}
            >
              Our Pizza Menu
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: colors.White,
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
              }}
            >
              in Sheffield
            </Typography>
          </Box>

          {/* Tagline */}
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: colors.White,
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            Explore our range of freshly baked pizzas, all served on a hearty
            base and made to fill you up.
          </Typography>
        </Box>

        {/* Signature Dishes Subtitle */}
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
            Popular
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
            Choices
          </Typography>
        </Box>

        {/* Food Cards Grid */}
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
          {foodItems.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              title={item.title}
              title2={item.title2}
              price={item.price}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
