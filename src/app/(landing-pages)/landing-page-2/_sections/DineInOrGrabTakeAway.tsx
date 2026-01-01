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
            Dine-In or
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
            Grab Takeaway{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: "#FFFFFF",
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            Big flavours, quality ingredients, and food you’ll love—freshly
            prepared, perfectly grilled, and served just the way it should be.{" "}
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
            Reserve Your Spot
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
            Reserve Your Table
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
