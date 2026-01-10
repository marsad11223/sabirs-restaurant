"use client";
import { Box, Typography } from "@mui/material";
import { fonts } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface MenuTicketsProps {
  title: string;
  price: string;
  description: string;
}
export default function MenuTickets({
  title,
  price,
  description,
}: MenuTicketsProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="400"
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        padding: { xs: "15px 12px", md: "20px" },
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        height: "-webkit-fill-available",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: fonts.primaryTypography,
            lineHeight: fonts.primaryTypography,
            color: "#851A1D",
            fontFamily: '"Bebas Neue", sans-serif',
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: fonts.p5,
            lineHeight: fonts.p5,
            color: "#00000080",
            paddingTop: "10px",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: fonts.h5,
          lineHeight: fonts.h5,
          color: "#851A1D",
          fontFamily: '"Bebas Neue", sans-serif',
          textTransform: "uppercase",
        }}
      >
        {price}
      </Typography>
    </Box>
  );
}
