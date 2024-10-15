import pngs from "@/_assets/pngs";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Box
        id="herosection"
        sx={{
          backgroundImage: "url(/bgSabirsGrill.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: { md: "100vh", sm: "auto", xs: "auto" },
          minHeight: { md: "100vh", sm: "600px", xs: "580px" },
          position: "relative",
        }}
      >
        <Box>
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
                xs: "140px ",
                sm: "80px",
                md: "190px",
                lg: "195px",
                xl: "200px",
              },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: "10",
              gap: "18px",
              alignItems: "center",
              m: "auto auto",
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
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "100px",
                sm: "120px",
                md: "143px",
                lg: "160px",
              },
              position: "absolute",
              bottom: 0,
              left: 0,
              background:
                "radial-gradient(50% 95.48% at 50% 50%, #851A1D 0%, #560508 71%)",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
