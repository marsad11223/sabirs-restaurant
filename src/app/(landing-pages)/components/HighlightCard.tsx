"use client";

import { Box, Typography } from "@mui/material";
import { fonts } from "@/app/utils/themes";

interface HighlightCardProps {
  title: string;
  description: string;
  redTheme?: boolean;
}

export default function HighlightCard({
  title,
  description,
  redTheme,
}: HighlightCardProps) {
  return (
    <Box
      sx={{
        paddingLeft: "15px",
        borderLeft: redTheme
          ? { xs: "2px solid #FFD40D", md: "3px solid #FFD40D" }
          : { xs: "2px solid #6D1212", md: "3px solid #6D1212" },
        height: "-webkit-fill-available",
        paddingY: "10px",
      }}
    >
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
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
