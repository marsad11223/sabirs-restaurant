"use client";
import webp from "@/_assets/webp";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroProps {
  headingText: string; // Define the prop for heading text
}

export default function Hero({ headingText }: HeroProps) {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    color: colors.White,
    fontSize: fonts.headingPrimary,
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          minHeight: { xs: "30vh" },
          overflow: "hidden",
          backgroundColor: colors.primaryRed,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{ padding: { xs: "30px", md: "40px" }, maxWidth: "1000px" }}
          justifyContent="center"
          alignItems="center"
          container
        >
          {/* heading  */}
          <Grid sx={{}} item xs={12} md={6}>
            <Typography
              data-aos="zoom-out"
              data-aos-duration="1000"
              sx={{
                ...headingStyles,
                textWrap: "nowrap",
                textAlign: "center",
              }}
            >
              {headingText}
            </Typography>
          </Grid>
          {/* image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: { xs: "350px", sm: "500px", lg: "560px" },
              }}
            >
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={webp.HeroBurger}
                alt="HeroBurger"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
