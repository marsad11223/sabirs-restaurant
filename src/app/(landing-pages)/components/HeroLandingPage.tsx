"use client";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";
import svgs from "@/_assets/svgs";
import Image, { StaticImageData } from "next/image";

interface HeroLandingPageProps {
  bgImage?: string;
  icon?: StaticImageData | string;
  bannerText?: string;
  heading1?: string;
  heading2?: string;
  description?: string;
  button1Text?: string;
  button2Text?: string;
}

export default function HeroLandingPage({
  bgImage = "./bgHeroLandingPage.png",
  icon = svgs.redStar,
  bannerText = "Rated #1 Burger Joint in Sheffield",
  heading1 = "SHEFFIELD'S BEST",
  heading2 = "CRAFTED BURGERS",
  description = "At Sabir's Grill, we serve freshly grilled food made with quality ingredients and bold flavours. Every dish is prepared with care, cooked to perfection, and designed to give you a satisfying dining experience worth coming back for.",
  button1Text = "Order Now",
  button2Text = "Explore Menu",
}: HeroLandingPageProps) {
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
          minHeight: "100vh",
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
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: sectionPadding,
          }}
        >
          <Box
            sx={{
              maxWidth: "1440px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "600px", lg: "900px" },
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
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay="300"
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
                  src={icon}
                  alt="icon"
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
                  {bannerText}
                </Typography>
              </Box>

              <Box>
                {/* Main Headline - Part 1 */}
                <Typography
                  data-aos="fade-left"
                  data-aos-duration="400"
                  sx={{
                    color: colors.secondaryYellow,
                    fontSize: fonts.headingPrimary,
                    lineHeight: fonts.headingPrimary,
                    textTransform: "uppercase",
                    fontFamily: '"Bebas Neue", sans-serif',
                  }}
                >
                  {heading1}
                </Typography>
                {/* Main Headline - Part 2 */}
                <Typography
                  data-aos="fade-right"
                  data-aos-duration="400"
                  sx={{
                    color: colors.White,
                    fontSize: fonts.headingPrimary,
                    lineHeight: fonts.headingPrimary,
                    textTransform: "uppercase",
                    fontFamily: '"Bebas Neue", sans-serif',
                  }}
                >
                  {heading2}
                </Typography>
              </Box>

              {/* Descriptive Paragraph */}
              <Typography
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay="500"
                sx={{
                  color: colors.White,
                  fontSize: fonts.p4,
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                {description}
              </Typography>

              {/* Call-to-Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "8px", sm: "20px" },
                  marginTop: { xs: "20px", md: "10px" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {/* Order Now Button */}
                <Box
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-delay="700"
                >
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
                      minWidth: "200px",
                    }}
                  >
                    {button1Text}
                  </Box>
                </Box>
                {/* Explore Menu Button */}
                <Box
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-delay="700"
                >
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
                      minWidth: "200px",
                    }}
                  >
                    {button2Text}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
