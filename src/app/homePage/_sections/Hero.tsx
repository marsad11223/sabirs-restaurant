import pngs from "@/_assets/pngs";
import webp from "@/_assets/webp";
import Navbar from "@/_components/navbar/Navbar";
import { Box, CardMedia } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Box
        id="herosection"
        sx={{
          width: "100%",
          height: "100vh",
          // minHeight: { md: "100vh", sm: "600px", xs: "480px" },
          position: "relative",
        }}
      >
        {/* navbar  */}
        <Box sx={{ position: "relative", zIndex: "1" }}>
          <Navbar />
        </Box>
        {/* bg video  */}
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
          }}
        >
          <video
            autoPlay
            loop
            muted
            // alt="explosion 3D animation"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/bgHero.mp4" type="video/mp4" />{" "}
            {/* Ensure the correct path and type */}
            Your browser does not support the video tag.
          </video>
        </Box>
        {/* heading  */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            // transform: {
            //   xs: "translate(-50%, -20%)",
            //   md: "translate(-50%, -30%)",
            //   lg: "translate(-50%, -40%)",
            //   xl: "translate(-50%, -50%)",
            // },
            transform: "translate(-50%, -70%)",
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "85vw",
                sm: "70vw",
                md: "60vw",
                lg: "50vw",
                xl: "50vw",
              },

              width: "100%",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "center",
              // position: "relative",
              // zIndex: "10",
              // gap: "18px",
              // alignItems: "center",
              // m: "auto auto",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={webp.HeroHedding}
              alt="bg heroSection"
            />
            {/* <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              src={webp.HeroBurger}
              alt="bg heroSection"
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
