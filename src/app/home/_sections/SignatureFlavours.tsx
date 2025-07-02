"use client";
import { Box, Grid, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import webp from "@/_assets/webp";
import Image from "next/image";
import Button from "@/_components/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SignatureFlavours() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const items = [
    {
      image: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360494/sabir%27s/Burger_1_upepqx.webp`,
      text: "Chicken Deluxe",
    },
    {
      image: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360496/sabir%27s/Burger_2_lqvuyl.webp`,
      text: "Chicken Fillet Burger",
    },
    {
      image: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360498/sabir%27s/Burger_3_snqnra.webp`,
      text: "Cheese Burger",
    },
    {
      image: `https://res.cloudinary.com/ddixiuh7h/image/upload/v1751360499/sabir%27s/Burger_4_vnztqx.webp`,
      text: "Flamin Fusion Burger",
    },
  ];

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Box
      sx={{
        borderBottom: {
          xs: "4px solid" + colors.secondaryYellow,
          md: "6px solid" + colors.secondaryYellow,
          xl: "10px solid" + colors.secondaryYellow,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.White,
          padding: { xs: "30px 20px", sm: "40px 40px", lg: "80px 140px" },
          textAlign: "center",
          borderBottom: {
            xs: "4px solid" + colors.darkGrey,
            md: "6px solid" + colors.darkGrey,
            xl: "10px solid" + colors.darkGrey,
          },
        }}
      >
        <Typography
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          Signature Flavors
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.primaryRed,
          }}
        >
          Unforgettable Bites
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "40px", md: "60px", lg: "80px" },
          }}
        >
          <Grid
            data-aos="zoom-in"
            data-aos-duration="1000"
            sx={{ maxWidth: "1600px" }}
            container
            spacing={2}
          >
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} xl={3} key={index}>
                <Box>
                  <Box
                    sx={{
                      height: { xs: "240px", sm: "200px", md: "250px" },
                      width: "auto",
                    }}
                  >
                    <Image
                      width={250}
                      height={250}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      src={item.image}
                      alt={item.text}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: fonts.primaryTypography,
                      lineHeight: fonts.primaryTypography,
                      color: colors.primaryRed,
                      paddingY: { xs: "8px", md: "14px", lg: "20px" },
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{ marginTop: { xs: "20px", sm: "40px", md: "60px", xl: "80px" } }}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <Button
            styles={{ backgroundColor: colors.primaryRed, color: colors.White }}
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
