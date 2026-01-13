"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image, { StaticImageData } from "next/image";

export interface InfoSectionProps {
  backgroundColor?: string;
  heading1: string;
  heading2: string;
  description: string;
  description2?: string;
  imageSrc: StaticImageData | string;
  reverseOrder?: boolean;
}

export default function InfoSection({
  backgroundColor = colors.White,
  heading1,
  heading2,
  description,
  description2,
  imageSrc,
  reverseOrder = false,
}: InfoSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: backgroundColor,
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: reverseOrder ? "row-reverse" : "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "32px", md: "48px", lg: "60px" },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Text Content Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "100%" },
            maxWidth: "530px",
          }}
          data-aos={reverseOrder ? "fade-left" : "fade-right"}
          data-aos-duration="400"
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
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: colors.secondaryYellow,
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
              }}
            >
              {heading1}
            </Typography>

            {/* Heading Part 2 - Red */}
            <Typography
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color:
                  backgroundColor === "#851A1D"
                    ? colors.White
                    : colors.primaryRed,
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
                marginTop: { xs: "-8px", md: "-12px" },
              }}
            >
              {heading2}
            </Typography>

            {/* Description Text */}
            <Box>
              <Typography
                sx={{
                  fontSize: fonts.p4,
                  lineHeight: "1.6",
                  color:
                    backgroundColor === "#851A1D"
                      ? colors.White
                      : colors.darkGrey,
                  marginTop: { xs: "8px", md: "12px" },
                  maxWidth: "100%",
                }}
              >
                {description}
              </Typography>
              <Typography
                sx={{
                  fontSize: fonts.p4,
                  lineHeight: "1.6",
                  color:
                    backgroundColor === "#851A1D"
                      ? colors.White
                      : colors.darkGrey,
                  marginTop: { xs: "8px", md: "12px" },
                  maxWidth: "100%",
                }}
              >
                {description2}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
          data-aos={reverseOrder ? "fade-right" : "fade-left"}
          data-aos-duration="400"
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "500px", md: "100%" },
                position: "relative",
              }}
            >
              <Image
                src={imageSrc}
                alt={`${heading1} ${heading2}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
