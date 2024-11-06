"use client";

import webp from "@/_assets/webp";
import { Padding } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  const headingStyles = {
    color: "#FFD40D",
    fontSize: {
      xs: "70px",
      md: "100px",
      lg: "120px",
      xl: "150px",
    },
    lineHeight: {
      xs: "70px",
      md: "100px",
      lg: "120px",
      xl: "150px",
    },
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };
  return (
    <>
      <Box
        id="herosection"
        sx={{
          width: "100%",
          minHeight: "100vh",
          height: "800px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#851A1D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: { xs: "60%", sm: "80%" },
            width: "100%",
            position: "relative",
            padding: "0 30px",
          }}
        >
          <Typography sx={{ ...headingStyles }}>taste the world</Typography>
          <Box
            sx={{
              height: "60%",
              width: " 100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={webp.SmashBurger}
              alt="SmashBurger"
            />
          </Box>
          <Typography sx={{ ...headingStyles, color: "#ffffff" }}>
            of flavour
          </Typography>
          {/* <Image src={} /> */}
        </Box>
      </Box>
    </>
  );
}
