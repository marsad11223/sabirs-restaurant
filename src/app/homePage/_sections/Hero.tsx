import pngs from "@/_assets/pngs";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box>
          {/* bg img  */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "550px", sm: "500px", md: "650px", lg: "800px" },
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={pngs.BGsabirsGrill}
              alt="bg heroSection"
            />
          </Box>
          {/* red box */}
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "100px",
                sm: "120px",
                md: "143px",
                lg: "160px",
              },
              background:
                "radial-gradient(50% 95.48% at 50% 50%, #851A1D 0%, #560508 71%)",
              marginTop: "-4px",
            }}
          ></Box>
        </Box>
        {/* center image  */}
        <Box
          sx={{
            maxWidth: {
              xs: "250px",
              sm: "300px",
              md: "400px",
              lg: "450px",
              xl: "500px",
            },
            paddingTop: {
              xs: "50px ",
              sm: "80px",
              md: "110px",
              lg: "195px",
              xl: "200px",
            },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "18px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={pngs.HeroHedding}
            alt="bg heroSection"
          />
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            src={pngs.HeroBurger}
            alt="bg heroSection"
          />
        </Box>
      </Box>
    </>
  );
}
