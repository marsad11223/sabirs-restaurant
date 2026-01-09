"use client";

import { Box, Typography } from "@mui/material";
import { fonts } from "@/app/utils/themes";

interface HighlightCardProps {
  title: string;
  description: string;
}

export default function HighlightCard({
  title,
  description,
}: HighlightCardProps) {
  return (
    <Box
      sx={{
        paddingLeft: "15px",
        borderLeft: { xs: "2px solid #6D1212", md: "3px solid #6D1212" },
        height: "-webkit-fill-available",
        paddingY: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: fonts.primaryTypography,
          lineHeight: fonts.primaryTypography,
          color: "#6D1212",
          fontFamily: '"Bebas Neue", sans-serif',
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: fonts.p5,
          color: "#00000080",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
