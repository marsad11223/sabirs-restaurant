import { Box, Button, Typography } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";

export default function LabmKarahi() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <Box sx={{ height: { xs: "500px", sm: "600px", md: "100%" } }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={pngs.BGlabmKarahi}
            alt="LabmKarahi"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            maxWidth: { sm: "500px", md: "800px", lg: "452px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "35px", md: "40px", lg: "64px" },
              color: "#851A1D",
              fontWeight: "700",
              fontFamily: "Oswald",
              WebkitTextStroke: {
                xs: ".65px white",
                md: "1px white",
                lg: "2px white",
              },
            }}
          >
            LAMB KARAHI
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "700",
              padding: { xs: "28px 0", lg: "40px 0" },
            }}
          >
            Succulent lamb slow-cooked in a fragrant blend of Kashmiri spices,
            finished with saffron and yogurt. Served with basmati rice and naan.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
              gap: "17px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                textDecoration: "line-through",
                color: "#FFFFFF80",
                paddingTop: "13px",
              }}
            >
              £21.76
            </Typography>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "700", paddingTop: "6px" }}
            >
              £11.76
            </Typography>
            {/* Button  */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <OrderButton />
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: "20px" }}>
            <OrderButton />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function OrderButton() {
  return (
    <>
      <Button
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
