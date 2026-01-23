"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";

interface CTASectionProps {
  headingWhite: string;
  headingRed: string;
  description: string;
  button1Text?: string;
  button2Text?: string;
}

export default function CTASection({
  headingWhite,
  headingRed,
  description,
  button1Text,
  button2Text,
}: CTASectionProps) {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFD40D" }}>
      <Box sx={{ padding: sectionPadding, maxWidth: "1440px", margin: "auto" }}>
        {/* Title Section */}
        <Box sx={{ textAlign: "center", maxWidth: "680px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: "#fff",
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {headingWhite}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: "#851A1D",
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {headingRed}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: "#FFFFFF",
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            margin: "auto",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "8px", sm: "20px" },
            flexWrap: "wrap",
            marginTop: { xs: "40px", sm: "40px", md: "60px", lg: "80px" },
          }}
        >
          {button1Text && (
            <Box
              component="button"
              sx={{
                backgroundColor: colors.primaryRed,
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: { xs: "15px 10px", md: "20px 40px" },
                fontSize: fonts.p5,
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#A01F23",
                  transform: "translateY(-2px)",
                  boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.2)`,
                },
                "&:active": {
                  transform: "translateY(0)",
                },
                margin: "auto",
                fontWeight: "700",
                minWidth: { xs: "170px", sm: "210px" },
              }}
            >
              {button1Text}
            </Box>
          )}
          {button2Text && (
            <Box
              component="button"
              sx={{
                color: colors.primaryRed,
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: { xs: "15px 10px", md: "20px 40px" },
                fontSize: fonts.p5,
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#fff",
                  transform: "translateY(-2px)",
                  boxShadow: `0px 4px 12px rgba(1, 1, 1, 0.2)`,
                },
                "&:active": {
                  transform: "translateY(0)",
                },
                marginTop: { sm: "40px", md: "60px", lg: "80px" },
                margin: "auto",
                fontWeight: "700",
                minWidth: { xs: "170px", sm: "210px" },
              }}
            >
              {button2Text}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
