import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { fonts, colors } from "@/app/utils/themes";

export default function NextMealSlider({
  image,
  title,
}: {
  image: StaticImageData;
  title?: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: { xs: "30px", sm: "20px" },
      }}
    >
      <Box
        sx={{
          height: { xs: "250px", sm: "290px", lg: "380px" },
          width: { xs: "250px", sm: "290px", lg: "380px" },
          borderRadius: "30px",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={image}
          alt="CarouselChickenBurger"
        />
      </Box>
      {title && (
        <Typography
          sx={{
            fontSize: fonts.tertiaryTypography,
            color: colors.primaryRed,
          }}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
}
