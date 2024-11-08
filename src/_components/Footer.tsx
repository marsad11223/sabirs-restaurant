"use client";
import svgs from "@/_assets/svgs";
import { fonts } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Footer = () => {
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
            <Typography sx={{ fontSize: fonts.headingSecondary }}>
              heading
            </Typography>
            <Typography>heading</Typography>
            <Typography>heading</Typography>
            <Typography>heading</Typography>
            <Typography>heading</Typography>
          </Box>
          <Box>
            <Typography>social</Typography>
            <Typography>social</Typography>
            <Typography>social</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
