"use client";
import svgs from "@/_assets/svgs";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Footer = () => {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    color: colors.primaryRed,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  const textStyles = {
    color: colors.smokeGray,
    textTransform: "capitalize",
    fontSize: fonts.tertiaryTypography,
    lineHeight: fonts.tertiaryTypography,
  };

  return (
    <>
      <Box
        sx={{
          padding: "40px 200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ width: "400px" }}>
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={svgs.Logo}
              alt="logo"
            />
          </Box>
          <Box>
            <Typography sx={{ ...headingStyles }}>heading</Typography>
            <Typography sx={{ ...textStyles }}>heading</Typography>
            <Typography sx={{ ...textStyles }}>heading</Typography>
            <Typography sx={{ ...textStyles }}>heading</Typography>
            <Typography sx={{ ...textStyles }}>heading</Typography>
          </Box>
          <Box>
            <Typography sx={{ ...headingStyles }}>social</Typography>
            <Typography sx={{ ...textStyles }}>social</Typography>
            <Typography sx={{ ...textStyles }}>social</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
