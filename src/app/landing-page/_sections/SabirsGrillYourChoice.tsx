"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";

interface FeatureCardProps {
  icon: any;
  firstWord: string;
  secondWord: string;
  description: string;
}

function FeatureCard({
  icon,
  firstWord,
  secondWord,
  description,
}: FeatureCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: "12px", md: "16px" },
        maxWidth: { xs: "300px", sm: "280px", md: "300px" },
        margin: "auto",
      }}
    >
      {/* Icon Circle */}

      <Box
        sx={{
          width: { xs: "50px", sm: "55px", md: "60px" },
          height: { xs: "50px", sm: "55px", md: "60px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={icon}
          alt={`${firstWord} ${secondWord}`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: fonts.h4,
          lineHeight: fonts.h4,
          fontFamily: '"Bebas Neue", sans-serif !important',
        }}
      >
        <Box
          component="span"
          sx={{
            color: colors.secondaryYellow,
            fontFamily: "inherit",
          }}
        >
          {firstWord}
        </Box>
        <br />
        <Box
          component="span"
          sx={{ color: colors.primaryRed, fontFamily: "inherit" }}
        >
          {secondWord}
        </Box>
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: fonts.p4,
          lineHeight: fonts.p4,
          color: "#414143 !important",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default function SabirsGrillYourChoice() {
  const features = [
    {
      icon: svgs.expertChefs,
      firstWord: "EXPERT",
      secondWord: "CHEFS",
      description:
        "Trained specialists perfecting every burger with precision.",
    },
    {
      icon: svgs.premiumQuality,
      firstWord: "PREMIUM",
      secondWord: "QUALITY",
      description: "Only the finest ingredients sourced locally.",
    },
    {
      icon: svgs.premiumQuality,
      firstWord: "MADE",
      secondWord: "WITH LOVE",
      description:
        "Every item is crafted with passion and attention to detail.",
    },
    {
      icon: svgs.premiumQuality,
      firstWord: "FAST",
      secondWord: "DELIVERY",
      description:
        "Hot, fresh burgers delivered to your door in 30 minutes or less.",
    },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: colors.White }}>
      {/* Yellow Header Section */}
      <Box
        sx={{
          backgroundColor: colors.secondaryYellow,
          padding: {
            xs: "20px 30px",
            sm: "30px 50px",
            md: "40px 100px",
            lg: "40px 150px",
            xl: "40px 200px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: "16px", md: "20px" },
            maxWidth: "1600px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Left Side - Deal Info */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", sm: "20px", md: "40px" },
              alignItems: "flex-start",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: colors.primaryRed,
                fontFamily: '"Bebas Neue", sans-serif',
              }}
            >
              DEAL!!!
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: fonts.h5,
                  fontWeight: fonts.h5,
                  color: colors.White,
                  fontFamily: '"Bebas Neue", sans-serif',
                }}
              >
                MEAL DEAL: 2 BURGERS + 2 FRIES + 2 DRINKS
              </Typography>
              <Typography
                sx={{
                  fontSize: fonts.p5,
                  fontWeight: fonts.p5,
                  color: colors.primaryRed,
                }}
              >
                Only £19.99 - Save £8!
              </Typography>
            </Box>
          </Box>

          {/* Right Side - Claim Now Button */}
          <Box
            component="button"
            sx={{
              backgroundColor: colors.primaryRed,
              color: "#FFD40D",
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
            }}
          >
            Claim Now
          </Box>
        </Box>
      </Box>
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
            SABIR'S GRILL
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
            YOUR CHOICE
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: "#414143",
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            Enjoy expertly grilled food, bold tastes, and friendly service that
            feels like home.
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
            gap: { xs: "15px", md: "20px", lg: "30px" },
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              firstWord={feature.firstWord}
              secondWord={feature.secondWord}
              description={feature.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
