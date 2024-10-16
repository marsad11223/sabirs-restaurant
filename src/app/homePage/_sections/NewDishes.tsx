import pngs from "@/_assets/pngs";
import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Location from "./Location";

export default function NewDishes() {
  const heddingBox = {
    height: { xs: "55px", sm: "98px", lg: "117px" },
    width: { xs: "220px", sm: "400px", lg: "490px" },
    clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50% , -50% )",
  };
  return (
    <>
      <Box
        id="newdishes"
        sx={{
          position: "relative",
          backgroundImage: "url(/bgNewDishes.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      >
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
            OUR NEW DISHES
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
        <Box
          sx={{
            height: "auto",
            width: "100%",
            position: "relative",
            opacity: "5",
            padding: {
              xs: "0 20px 20px 20px ",
              sm: "0 50px 50px 50px ",
              lg: "0px 80px 80px 80px",
            },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={webp.Dishes}
            alt="dishes"
          />
        </Box>

        <Location />
      </Box>
    </>
  );
}
