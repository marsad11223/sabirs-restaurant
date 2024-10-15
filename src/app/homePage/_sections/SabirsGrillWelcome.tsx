import { Box, Typography } from "@mui/material";
import Image from "next/image";

import webp from "@/_assets/webp";

export default function SabirsGrillWelcome() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "60px", lg: "40px", xl: "100px" },
          overflow: "hidden",

          backgroundImage: "url(/bgWelcomeSabri.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: { md: "100vh", sm: "auto", xs: "auto" },
          minHeight: { md: "100vh", sm: "600px", xs: "500px" },
          position: "relative",

          padding: { xs: "50px 20px", sm: "100px 60px", md: "130px 80px" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              background: "#ffffff",
              borderRadius: "25px",
              width: "100%",
              maxWidth: { xs: "100%", md: "700px", lg: "528px" },
              padding: {
                xs: "40px 20px",
                sm: "60px 60px",
                md: "60px 30px",
                lg: "35px 40px",
              },
              zIndex: "1000",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "35px", md: "40px", lg: "64px" },
                fontWeight: "700",
                fontFamily: "Oswald",
                lineHeight: { xs: "50px", lg: "90px" },
                color: "#851A1D",
              }}
            >
              Welcome to Sabir's Grill
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px", lg: "24px" },
                fontWeight: "400",
                color: "#000000",
                paddingTop: { xs: "12px", sm: "40px", lg: "50px" },
                lineHeight: { xs: "30px", lg: "44px" },
              }}
            >
              Sabir's Grill offers a delightful dining experience with a menu
              full of delicious grilled dishes, from juicy kebabs to tender
              steaks. Enjoy expertly prepared meals in a warm and welcoming
              atmosphere that keeps guests coming back for more.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "25px",
              backgroundColor: "#851A1D",
              transform: {
                xs: "rotate(-4deg)",
                sm: "rotate(-2deg)",
                md: "rotate(-5deg)",
              },
              position: "absolute",
              zIndex: "900",
              top: "0",
              left: "0",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "542px", xl: "620px" },
            height: "auto",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={webp.SabriFeast}
            alt="group image"
          />
        </Box>
      </Box>
    </>
  );
}
