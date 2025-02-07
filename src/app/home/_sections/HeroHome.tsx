"use client";

import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";
import svgs from "@/_assets/svgs";

export default function HeroHome() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    color: colors.secondaryYellow,
    fontSize: {
      xs: "52px",
      sm: "60px",
      md: "72px",
      lg: "96px",
    },
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Navbar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(./bgHeroHome.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: {
              xs: "20px",
              sm: "20px 30px",
              md: "20px 80px",
              lg: "20px 80px",
              xl: "25px 120px",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "1600px",
              margin: "auto",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                data-aos="fade-right"
                data-aos-duration="1000"
                sx={{ ...headingStyles }}
              >
                Sabir&rsquo;s is Coming
              </Typography>
              <Typography
                data-aos="fade-right"
                data-aos-duration="1000"
                sx={{ ...headingStyles, color: "#ffffff" }}
              >
                to Sheffield!
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                paddingTop: "50px",
              }}
            >
              <Image
                style={{ width: "18px" }}
                src={svgs.LocationYellowIcon}
                alt="location"
              />
              <Typography
                sx={{
                  color: colors.White,
                  fontSize: fonts.primaryTypography,
                  textDecoration: "underline",
                }}
              >
                224-230 London Rd, Highfield, Sheffield S2 4LW, UK
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
