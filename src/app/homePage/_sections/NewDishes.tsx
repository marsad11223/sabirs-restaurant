import pngs from "@/_assets/pngs";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function NewDishes() {
  return (
    <>
      <Box sx={{ padding: "0px 80px 80px 80px", backgroundColor: "red" }}>
        <Box
          sx={{ textAlign: "center", padding: "100px 0", position: "relative" }}
        >
          <Typography
            sx={{
              color: "#851A1D",
              fontSize: "64px",
              fontWeight: "700",
              fontFamily: "Oswald",
            }}
          >
            OUR NEW DISHES
          </Typography>
          <Box
            sx={{
              height: "117px",
              width: "490px",
              backgroundColor: "#ffffff",
              clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
              position: "absolute",
              top: "-50px",
              left: "-50%",
            }}
          >
            <Box
              sx={{ width: "100%", height: "100%", position: "absolute" }}
            ></Box>
          </Box>
        </Box>

        {/* dishes menu  */}
        <Box sx={{ height: "auto", width: "100%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={pngs.Dishes}
            alt="dishes"
          />
        </Box>
      </Box>
    </>
  );
}
