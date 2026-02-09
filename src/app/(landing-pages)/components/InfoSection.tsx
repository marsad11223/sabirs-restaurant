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
  button?: string;
  buttonOnClick?: () => void;
  rightAlignInMobile?: boolean;
}

export default function InfoSection({
  backgroundColor = colors.White,
  heading1,
  heading2,
  description,
  description2,
  imageSrc,
  reverseOrder = false,
  button,
  buttonOnClick,
  rightAlignInMobile,
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
          alignItems: { md: "center" },
          justifyContent: "space-between",
          gap: { xs: "32px", md: "48px", lg: "60px" },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Text Content Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            maxWidth: "530px",
          }}
          data-aos={reverseOrder ? "fade-left" : "fade-right"}
          data-aos-duration="400"
        >
          <Box>
            {/* Heading Part 1 - Yellow */}
            <Typography
              sx={{
                fontSize: fonts.headingSecondary,
                lineHeight: fonts.headingSecondary,
                color: colors.secondaryYellow,
                fontFamily: '"Bebas Neue", sans-serif',
                textTransform: "uppercase",
                textAlign: rightAlignInMobile
                  ? { xs: "right", sm: "left" }
                  : "left",
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
                textAlign: rightAlignInMobile
                  ? { xs: "right", sm: "left" }
                  : "left",
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
                  marginTop: { xs: "8px", md: "12px", lg: "15px" },
                  maxWidth: "100%",
                  textAlign: rightAlignInMobile
                    ? { xs: "right", sm: "left" }
                    : "left",
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
                  marginTop: { xs: "8px", md: "12px", lg: "15px" },
                  maxWidth: "100%",
                  textAlign: rightAlignInMobile
                    ? { xs: "right", sm: "left" }
                    : "left",
                }}
              >
                {description2}
              </Typography>
            </Box>
            {button && (
              <Box
                component="button"
                onClick={buttonOnClick}
                sx={{
                  backgroundColor: colors.primaryRed,
                  color: "#FFD40D",
                  border: "none",
                  borderRadius: "10px",
                  padding: { xs: "15px 30px", md: "20px 40px" },
                  fontSize: fonts.p5,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  fontWeight: "700",
                  minWidth: "210px",
                  width: "fit-content",
                  marginTop: { xs: "8px", md: "12px", lg: "15px" },
                  "&:hover": {
                    backgroundColor: "#A01F23",
                    transform: "translateY(-2px)",
                    boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {button}
              </Box>
            )}
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
