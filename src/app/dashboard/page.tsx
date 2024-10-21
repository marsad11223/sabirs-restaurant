"use client";
// import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "@/_components/navbar/Navbar";
import Footer from "@/_components/footer/Footer";
import Location from "../homePage/_sections/Location";
const heddingBox = {
  height: { xs: "55px", sm: "98px", lg: "117px" },
  width: { xs: "220px", sm: "400px", lg: "490px" },
  clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate( -50% , -50% )",
};
export default function Dashboard() {
  return (
    <>
      <Box>
        <Navbar />
        <Box
          sx={{
            textAlign: "center",
            backgroundImage: "url(/bgNewDishes.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* hedding  */}
          <Box
            sx={{
              textAlign: "center",
              padding: { xs: "40px 0", sm: "85px 0", lg: "100px 0" },
              position: "relative",
            }}
          >
            <Typography
              sx={{
                color: "#851A1D",
                fontSize: { xs: "24px", sm: "35px", md: "45px", lg: "64px" },
                fontWeight: "700",
                fontFamily: "Oswald",
                position: "relative",
                zIndex: "10",
              }}
            >
              Order Online
            </Typography>
            <Box
              sx={{
                ...heddingBox,
                zIndex: "9",
                backgroundColor: "#ffffff",
              }}
            ></Box>
            <Box
              sx={{
                ...heddingBox,
                marginTop: { xs: "9px", lg: "12px" },
                width: { xs: "227px", sm: "420px", lg: "500px" },
                zIndex: "8",
                backgroundColor: "#851A1D",
              }}
            ></Box>
          </Box>

          <Location />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
