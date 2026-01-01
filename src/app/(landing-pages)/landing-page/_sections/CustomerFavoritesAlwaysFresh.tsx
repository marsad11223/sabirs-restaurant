"use client";
import { Box, Typography, Grid } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";
import webp from "@/_assets/webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FoodCard from "../../components/FoodCard";
import MenuTickets from "../../components/MenuTickets";

export default function CustomerFavoritesAlwaysFresh() {
  const foodItems = [
    {
      image: webp.CustomerFavorite1,
      title: "SIGNATURE BEEF",
      title2: "BURGER",
      price: "£8.99",
      description:
        "Juicy beef patty, melted cheese, fresh salad, and house sauce.",
    },
    {
      image: webp.CustomerFavorite2,
      title: "CHICKEN FILLET",
      title2: "BURGER",
      price: "£6.99",
      description:
        "Marinated chicken breast, flame-grilled and packed with flavour.",
    },
    {
      image: webp.CustomerFavorite3,
      title: "PERI PERI",
      title2: "CHICKEN",
      price: "£6.99",
      description:
        "Tender chicken grilled to perfection with peri peri spices.",
    },
    {
      image: webp.CustomerFavorite4,
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
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "60px 40px",
            lg: "80px 60px",
            xl: "100px 80px",
          },
          position: "relative",
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
              CUSTOMER FAVORITES
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
              ALWAYS FRESH
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
            Our best-loved menu items, made fresh daily to satisfy every
            craving.
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
            SIGNATURE
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
            DISHES
          </Typography>
        </Box>

        {/* Food Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: "24px", sm: "28px", md: "24px", lg: "32px" },
            maxWidth: "1600px",
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
        <Box
          sx={{
            maxWidth: "1600px",
            margin: "0 auto",
          }}
        >
          <Grid sx={{}} spacing={2} container>
            <Grid sx={{}} item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: fonts.h4,
                    lineHeight: fonts.h4,
                    color: colors.secondaryYellow,
                    fontFamily: '"Bebas Neue", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  sides
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "20px",
                    paddingTop: { xs: "20px", md: "40px" },
                  }}
                >
                  <MenuTickets
                    title="Fresh Garden Salad"
                    description="A crisp mix of seasonal greens and fresh veggies."
                    price="£4.99"
                  />
                  <MenuTickets
                    title="Garlic Bread"
                    description="Toasted bread with a rich, buttery garlic spread."
                    price="£3.99"
                  />
                  <MenuTickets
                    title="Grilled Corn on Cob"
                    description="Sweet corn, char-grilled and lightly seasoned."
                    price="£3.49"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid sx={{}} item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: fonts.h4,
                    lineHeight: fonts.h4,
                    color: colors.secondaryYellow,
                    fontFamily: '"Bebas Neue", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  drinks
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "20px",
                    paddingTop: { xs: "20px", md: "40px" },
                  }}
                >
                  <MenuTickets
                    title="Classic Cola"
                    description="Chilled and refreshing, perfect with any meal."
                    price="£2.00"
                  />
                  <MenuTickets
                    title="Fresh Lemonade"
                    description="Made daily with zesty lemons for a crisp taste."
                    price="£2.50"
                  />
                  <MenuTickets
                    title="Mint Iced Tea"
                    description="Cool, invigorating, and lightly sweetened with fresh mint."
                    price="£2.75"
                  />
                </Box>
              </Box>
            </Grid>
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
                margin: "auto",
                marginTop: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
              }}
            >
              View More
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
