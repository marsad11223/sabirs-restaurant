"use client";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";
import svgs from "@/_assets/svgs";
import Image from "next/image";

export default function HeroLandingPage() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          maxHeight: "1000px",
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
            justifyContent: { xs: "center", md: "flex-start" },
            backgroundImage: "url(./bgHeroLandingPage.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: {
              xs: "40px 20px",
              sm: "60px 40px",
              md: "80px 60px",
              lg: "100px 80px",
              xl: "120px 100px",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "600px", lg: "700px" },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px", md: "30px", lg: "50px" },
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Rating Badge */}
            <Box
              sx={{
                backgroundColor: "#FFD40D",
                borderRadius: "30px",
                padding: { xs: "8px 16px", sm: "10px 20px" },
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                width: "fit-content",
              }}
            >
              <Image
                src={svgs.redStar}
                alt="redStar"
                style={{
                  width: "20px",
                  height: "20px",
                }}
                width={20}
                height={20}
              />
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#851A1D",
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                Rated #1 Burger Joint in Sheffield
              </Typography>
            </Box>

            <Box>
              {/* Main Headline - Part 1 */}
              <Typography
                sx={{
                  color: colors.secondaryYellow,
                  fontSize: fonts.headingPrimary,
                  lineHeight: fonts.headingPrimary,
                  textTransform: "uppercase",
                  fontFamily: '"Bebas Neue", sans-serif',
                }}
              >
                SHEFFIELD'S BEST
              </Typography>
              {/* Main Headline - Part 2 */}
              <Typography
                sx={{
                  color: colors.White,
                  fontSize: fonts.headingPrimary,
                  lineHeight: fonts.headingPrimary,
                  textTransform: "uppercase",
                  fontFamily: '"Bebas Neue", sans-serif',
                }}
              >
                CRAFTED BURGERS
              </Typography>
            </Box>

            {/* Descriptive Paragraph */}
            <Typography
              sx={{
                color: colors.White,
                fontSize: fonts.p4,
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              At Sabir’s Grill, we serve freshly grilled food made with quality
              ingredients and bold flavours. Every dish is prepared with care,
              cooked to perfection, and designed to give you a satisfying dining
              experience worth coming back for.
            </Typography>

            {/* Call-to-Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "16px", sm: "20px" },
                marginTop: { xs: "20px", md: "10px" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {/* Order Now Button */}
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
                }}
              >
                Order Now
              </Box>

              {/* Explore Menu Button */}
              <Box
                component="button"
                sx={{
                  backgroundColor: "#FFFFFF33",
                  border: "none",
                  color: colors.White,
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
                    backgroundColor: "rgba(133, 26, 29, 0.9)",
                    transform: "translateY(-2px)",
                    boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Explore Menu
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
