import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { scrollToId } from "@/app/utils/helpers";

export default function NewProducts() {
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
        sx={{
          padding: {
            xs: "40px 16px",
            sm: "40px 32px",
            md: "80px 64px",
            lg: "100px 0 200px 0 ",
          },
          position: "relative",
          zIndex: "10",
        }}
      >
        {/* heading */}
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
            NEW PRODUCTS
          </Typography>
          {/* heading box */}
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
        {/* card */}
        <Box
          sx={{
            position: "relative",
            maxWidth: {
              xs: "100%",
              sm: "515px",
              md: "718px",
              lg: "1020px",
              xl: "40vw",
            },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "20px", sm: "40px", md: "60px" },
              position: "relative",
              maxWidth: {
                xs: "100%",
                sm: "500px",
                md: "700px",
                lg: "1000px",
                xl: "39.6vw",
              },
              margin: { xs: "0 20px", sm: "0" },
              padding: {
                xs: "30px 50px 30px 20px",
                sm: "50px 70px 50px 30px",
                md: "50px 70px 50px 30px",
                lg: "100px 200px 100px 90px",
              },
              marginTop: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
              backgroundColor: "#ffffff",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                maxWidth: { xs: "143px", sn: "220px", md: "250px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Oswald",
                  fontWeight: 400,
                  fontSize: "11px",
                  color: "#851A1D",
                  lineHeight: "16px",
                }}
              >
                WEEKEND DEALS
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Oswald",
                  fontWeight: 700,
                  fontSize: { xs: "18px", sm: "24px", md: "36px" },
                  color: "#851A1D",
                  lineHeight: "38.54px",
                  padding: {
                    xs: "0",
                    sm: "15px 0 10px 0",
                    md: "20px 0 15px 0",
                  },
                }}
              >
                Fresh Coconut
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: 400,
                  fontSize: { xs: "12px", md: "14px" },
                  color: "#00000080",
                  lineHeight: "23.12px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed dui tempor eros porttitor.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Oswald",
                  fontWeight: 700,
                  fontSize: { xs: "15px", sm: "20px", md: "24px" },
                  lineHeight: "23.12px",
                  textAlign: "left",
                  color: "#851A1D",
                  padding: {
                    xs: "0 0 15px 0",
                    sm: "18px 0 15px 0",
                    md: "20px 0 15px 0",
                  },
                }}
              >
                £10.00
              </Typography>
              {/* Add buttons here */}
              <OrderButton />
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "250px", lg: "350px" },
                minWidth: { xs: "100px", sm: "0" },
                width: "100%",
              }}
            >
              <Image
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                src={pngs.ItalianPasta}
                alt="Delicious Italian Pasta"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "#851A1D",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              transform: {
                sm: "translateY(15px)",
                md: "translateY(18px)",
                lg: "translateY(20px)",
              },
              boxShadow: "0px 5.14px 10.28px 0px #00000080",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export function OrderButton() {
  return (
    <>
      <Button
        onClick={() => scrollToId("location")}
        variant="contained"
        sx={{
          width: { xs: "100%", sm: "auto" },
          borderRadius: "50px",
          backgroundColor: "transparent",
          color: "#A52A2A", // Dark red text
          fontWeight: "bold",
          padding: { xs: "10px 32px 10px 10px", md: "10px 50px 10px 20px" },
          border: "2px solid #A52A2A", // Border color dark red
          textTransform: "uppercase", // Make text uppercase
          position: "relative",
          overflow: "hidden",
          ":hover": {
            backgroundColor: "rgba(128,0,0,0.7)",
            color: "#ffffff",
          },
        }}
        endIcon={
          <Box
            sx={{
              backgroundColor: "#A52A2A",
              borderRadius: "50%",
              width: { xs: "25px", sm: "30", md: "38px" },
              height: { xs: "25px", sm: "30", md: "38px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "5px",
            }}
          >
            <Image
              style={{ width: "12px", height: "auto" }}
              src={svgs.ArrowWhite}
              alt="white arrow"
            />
          </Box>
        }
      >
        Order Now
      </Button>
    </>
  );
}
