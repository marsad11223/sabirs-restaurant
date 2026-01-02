"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";

export default function DineInOrGrabTakeAway() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFD40D" }}>
      {/* Main Content Area */}
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "60px 40px",
            lg: "80px 60px",
            xl: "100px 80px",
          },
        }}
      >
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
            Ready For
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
            Great Burgers?
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: "#FFFFFF",
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            Explore more on our main diner page and see the full menu overview:
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "auto",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            component="button"
            sx={{
              backgroundColor: colors.primaryRed,
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: {
                xs: "15px 30px",
                md: "20px 40px",
              },
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
              marginTop: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
              margin: "auto",
            }}
          >
            Go To Main Page{" "}
          </Box>
          <Box
            component="button"
            sx={{
              color: colors.primaryRed,
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: {
                xs: "15px 30px",
                md: "20px 40px",
              },
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
              marginTop: { xs: "30px", sm: "40px", md: "60px", lg: "80px" },
              margin: "auto",
            }}
          >
            Our Menu{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
