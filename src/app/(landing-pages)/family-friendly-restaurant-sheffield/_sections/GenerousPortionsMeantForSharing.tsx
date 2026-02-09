"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import webp from "@/_assets/webp";

export default function GenerousPortionsMeantForSharing() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#851A1D",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          // display: "flex",
          // flexDirection: {
          //   xs: "column",
          //   md: reverseOrder ? "row-reverse" : "row",
          // },
          // alignItems: "center",
          // justifyContent: "space-between",
          // gap: { xs: "32px", md: "48px", lg: "60px" },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Text Content Section */}
        <Box
          sx={{
            maxWidth: "850px",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", md: "24px" },
            }}
          >
            {/* Heading Part 1 - Yellow */}
            <Typography
              data-aos="fade-right"
              data-aos-duration="400"
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: colors.secondaryYellow,
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
              }}
            >
              Generous Portions
            </Typography>

            {/* Heading Part 2 - Red */}
            <Typography
              data-aos="fade-left"
              data-aos-duration="400"
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: "#fff",
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
                marginTop: { xs: "-8px", md: "-12px" },
              }}
            >
              Meant for Sharing
            </Typography>

            {/* Description Text */}
            <Box data-aos="zoom-in" data-aos-duration="400">
              <Typography
                sx={{
                  fontSize: fonts.p4,
                  lineHeight: "1.6",
                  color: "#fff",
                  marginTop: { xs: "8px", md: "12px" },
                  width: { sm: "80%" },
                  margin: "auto",
                }}
              >
                At Sabir’s, food is about togetherness. Our dishes are served in
                generous portions, making them perfect for sharing around the
                table. Families and groups can enjoy a variety of flavours
                together, creating a true communal dining experience. Large
                servings, satisfying meals, and food made to be enjoyed together
                — that’s what makes Sabir’s great value for families and groups
                alike.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          data-aos="zoom-in"
          data-aos-duration="400"
          sx={{
            width: "100%",
            margin: "auto",
            marginTop: { xs: "20px", md: "60px", lg: "80px" },
          }}
        >
          <Image
            src={webp.generousPortionsMeantForSharing}
            alt="generousPortionsMeantForSharing"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
