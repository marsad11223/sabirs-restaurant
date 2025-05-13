"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SabirInSheffield() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };
  return (
    <Box
      sx={{
        padding: {
          xs: "60px 20px",
          md: "100px 60px",
          lg: "100px 150px 100px 100px",
          xl: "100px 150px",
        },
        backgroundImage: "url(bgHeroHome.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTopLeftRadius: { xs: "40px", md: "80px" },
        borderTopRightRadius: { xs: "40px", md: "80px" },
        overflow: "hidden",
        position: "relative",
        zIndex: "0",
      }}
    >
      {/* bg blur by positioning  */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      ></Box>
      {/* section content there */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "1044px",
          margin: "auto",
          gap: { xs: "40px" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "500px", md: "400px", lg: "500px" },
            width: "100%",
          }}
        >
          <Typography sx={{ ...headingStyles, color: colors.secondaryYellow }}>
            Sabir’s is Coming
          </Typography>
          <Typography sx={{ ...headingStyles, color: colors.White }}>
            to Sheffield!
          </Typography>
          <Typography
            sx={{
              color: colors.White,
              fontSize: fonts.secondaryTypography,
              marginTop: { xs: "10px", xl: "24px" },
            }}
          >
            {` Get ready, Sheffield! The legendary taste of Sabir’s is making its
            way to your city. Known for mouthwatering peri peri chicken, juicy
            burgers, and flavour-packed wraps, Sabir’s is bringing its signature
            spice and sizzling vibes to a brand-new location. Stay tuned for
            grand opening details — your new favourite food spot is almost here!`}
          </Typography>
        </Box>
        {/* location card there */}
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: { xs: "20px", lg: "30px" },
            backgroundColor: "#851A1D",
            padding: { xs: "20px", lg: "30px" },
            "& > :nth-of-type(1)": {
              borderRadius: { xs: "20px", lg: "30px" },
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2380.6151699975976!2d-1.4787846224865462!3d53.368041772295555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1747139742506!5m2!1sen!2s"
            style={{
              border: "0",
              height: "100%",
              width: "100%",
              aspectRatio: "21/19",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Image
              style={{ height: 17, width: "auto" }}
              src={svgs.LocationYellowIcon}
              alt="LocationYellowIcon"
            />
            <Typography
              sx={{ color: "#FFD40D", fontSize: "16px", lineHeight: "16px" }}
            >
              224-230 London Rd, Highfield, Sheffield S2 4LW, UK
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
