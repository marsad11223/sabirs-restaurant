"use client";

import { Box, Typography } from "@mui/material";
import { fonts } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";
import svgs from "@/_assets/svgs";

interface HighlightCardProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  redTheme?: boolean;
  image?: string | StaticImageData;
}

export default function HighlightCard({
  title,
  description,
  link,
  linkText,
  redTheme,
  image,
}: HighlightCardProps) {
  return (
    <Box
      sx={{
        paddingLeft: "15px",
        borderLeft: redTheme
          ? { xs: "2px solid #FFD40D", md: "3px solid #FFD40D" }
          : { xs: "2px solid #6D1212", md: "3px solid #6D1212" },
        paddingY: "10px",
      }}
    >
      {image && (
        <Box
          sx={{
            width: { xs: "40px", md: "60px" },
            marginBottom: { xs: "5px", md: "10px" },
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={image}
            alt="images"
          />
        </Box>
      )}
      <Typography
        sx={{
          fontSize: fonts.primaryTypography,
          lineHeight: fonts.primaryTypography,
          color: redTheme ? "#FFD40D" : "#6D1212",
          fontFamily: '"Bebas Neue", sans-serif',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: fonts.p5,
          color: redTheme ? "#ffffff" : "#414143",
          marginTop: "5px",
        }}
      >
        {description}
      </Typography>
      {linkText && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "5px",
            borderBottom: "1px solid #FFD40D",
            width: "fit-content",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#FFD40D",
            }}
          >
            {linkText}
          </Typography>
          <Image
            src={svgs.yellowExternalLinkIcon}
            alt="yellowExternalLinkIcon"
          />
        </Box>
      )}
    </Box>
  );
}
