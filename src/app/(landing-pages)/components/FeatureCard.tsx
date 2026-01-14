"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FeatureCardProps {
  icon: any;
  firstWord: string;
  secondWord: string;
  description?: string;
}

export default function FeatureCard({
  icon,
  firstWord,
  secondWord,
  description,
}: FeatureCardProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="400"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: "12px", md: "16px" },
        maxWidth: { xs: "300px", sm: "280px", md: "300px" },
        // margin: "auto",
        width: "100%",
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
      {description && (
        <Typography
          sx={{
            fontSize: fonts.p4,
            lineHeight: fonts.p4,
            color: "#414143 !important",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
