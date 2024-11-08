import React, { useState } from "react";
import webp from "@/_assets/webp";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Grid, Typography, SxProps, Theme } from "@mui/material";
import Image, { StaticImageData } from "next/image";

// Define types for bio data
type BioData = {
  title1: string;
  title2: string;
  description: string;
  imageSrc: string | StaticImageData;
  rowReverse?: boolean; // Optional rowReverse
};

type OurBioSectionProps = {
  title1: string;
  title2: string;
  description: string;
  imageSrc: string | StaticImageData;
  gridStyles?: SxProps<Theme>;
  rowReverse?: boolean;
};

export default function OurBio() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1600px", width: "100%" }}>
        <OurBioSection />
      </Box>
    </Box>
  );
}

export function OurBioSection() {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Grid sx={{}} container spacing={2}>
      <Grid sx={{}} item xs={12} sm={6}></Grid>
      <Grid sx={{}} item xs={12} sm={5}></Grid>
    </Grid>
  );
}
