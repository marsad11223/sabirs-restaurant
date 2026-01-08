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

export default function FlameGrilledMeats() {
  const foodItems = [
    {
      image: webp.customerFavourites5,
      title: "Chicken Shish",
      title2: "Kebab",
      price: "£8.99",
      description: "Tender chicken breast marinated for 24 hours.",
    },
    {
      image: webp.customerFavourites6,
      title: "Mixed Grill",
      title2: "Platters",
      price: "£3.99",
      description:
        "The ultimate grill experience. Perfect for the seriously hungry.",
    },
    {
      image: webp.customerFavourites7,
      title: "Charcoal-Grilled",
      title2: "Chicken",
      price: "£8.99",
      description:
        "Juicy chicken grilled over charcoal for a rich, smoky flavour.",
    },
    {
      image: webp.customerFavourites8,
      title: "Lamb",
      title2: "Kebabs",
      price: "£9.99",
      description: "Premium cuts of lamb marinated in Middle Eastern spices.",
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
              Flame-Grilled Meats
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
              Cooked to Perfection
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
            Our menu is built around the grill. From tender chicken to richly
            seasoned lamb, every dish is cooked over open flames to lock in
            flavour and create a perfect char.
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
            Customer
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
            favourites
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
