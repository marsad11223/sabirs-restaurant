"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "../../components/FeatureCard";

export default function CelebrateTogetherAtSabirs() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);
  const features = [
    {
      icon: svgs.flexibleSeating,
      firstWord: "Flexible ",
      secondWord: "seating",
      description: "Flexible seating for small to large groups",
    },
    {
      icon: svgs.customizableMenus,
      firstWord: "Customizable",
      secondWord: "menus",
      description: "Customizable menus tailored to your event",
    },
    {
      icon: svgs.eventCoordinator,
      firstWord: "event ",
      secondWord: "coordinator",
      description: "Dedicated event coordinator for seamless planning",
    },
    {
      icon: svgs.equipmentAvailability,
      firstWord: "equipment",
      secondWord: "availability",
      description: "Audio and visual equipment available upon request",
    },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: colors.White }}>
      {/* Main Content Area */}
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "60px 40px",
            lg: "80px 60px",
            xl: "100px 80px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "30px", sm: "40px", md: "50px" },
          backgroundImage: "url(./bgCelebrateTogetherAtSabir.png)",
          backgroundSize: "100% 70%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        {/* Title Section */}
        <Box sx={{ textAlign: "center", maxWidth: "680px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            Celebrate Together
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: "#851A1D",
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            At Sabir’s
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: "#414143",
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            Enjoy delicious food and personalized service in the perfect setting
            for your next party or event.
          </Typography>
        </Box>

        {/* Four Feature Cards */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: "40px", md: "20px", lg: "30px" },
            rowGap: "40px !important",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {features.map((feature, index) => (
            <Box key={index} sx={{ width: "fit-content", margin: "auto" }}>
              <FeatureCard
                // key={index}
                icon={feature.icon}
                firstWord={feature.firstWord}
                secondWord={feature.secondWord}
                description={feature.description}
              />
            </Box>
          ))}
        </Box>
        <Box
          component="button"
          sx={{
            backgroundColor: colors.primaryRed,
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: {
              xs: "15px 30px",
              md: "20px 40px",
            },
            fontSize: fonts.p5,
            cursor: "pointer",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "#A01F23",
              transform: "translateY(-2px)",
              boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
            },
            "&:active": {
              transform: "translateY(0)",
            },
            marginTop: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
            margin: "auto",
          }}
        >
          Reserve Your Spot
        </Box>
      </Box>
    </Box>
  );
}
