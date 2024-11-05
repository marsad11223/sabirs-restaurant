import pngs from "@/_assets/pngs";
import { Box } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "350px", sm: "450px", md: "auto" },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={pngs.BgHero}
            alt="bg heroSection"
          />
        </Box>
        <Box
          sx={{
            height: "auto",
            width: { xs: "60vw", sm: "450px", md: "600px", lg: "783px" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={pngs.SabriGrill}
            alt="bg heroSection"
          />
        </Box>
      </Box>
    </>
  );
}
