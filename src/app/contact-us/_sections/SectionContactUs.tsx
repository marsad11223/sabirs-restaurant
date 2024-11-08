import { Box, Button, Typography } from "@mui/material";
import StandardInput from "../../../_components/Input";
import Image from "next/image";
import svgs from "@/_assets/svgs";
// import pngs from "@/_assets/pngs";
export default function SectionContactUs() {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "40px 20px", sm: "50px 30px", md: "100px 80px" },
          position: "relative",
        }}
      >
        {/* bg image   */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          {/* <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={pngs.ContactUs}
            alt="ContactUs"
          /> */}
        </Box>
        {/* hedding  */}
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: { xs: "30px", sm: "48px", lg: "80px" },
          }}
        >
          <Typography
            sx={{
              color: "#851A1D",
              fontSize: { xs: "24px", sm: "35px", md: "45px", lg: "64px" },
              fontWeight: "700",
              fontFamily: "Oswald",
            }}
          >
            CONTACT US
          </Typography>
        </Box>
        {/* form && contact card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            gap: { xs: "50px", md: "60px", lg: "100px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: { xs: "100%", lg: "625px" },
              minWidth: { lg: "526px" },
            }}
          >
            {/* typography  */}
            <Box sx={{ textAlign: "left", maxWidth: "336px" }}>
              <Typography
                sx={{ color: "#00000080", fontSize: "16px", fontWeight: "400" }}
              >
                Have questions? Don't hesitate to reach out to our friendly
                team! Whether it's about quenching your hunger.
              </Typography>
            </Box>
            {/* inputs  */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "30px",
                  paddingBottom: "50px",
                }}
              >
                <StandardInput inputType="text" placeholder="Name" />
                <StandardInput inputType="email" placeholder="Email" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "30px",
                }}
              >
                <StandardInput inputType="number" placeholder="Phone" />
                <StandardInput inputType="text" placeholder="Subject" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "30px",
                  paddingTop: "80px",
                }}
              >
                <StandardInput inputType="text" placeholder="Message" />
              </Box>
            </Box>
            {/* button  */}
            <Box sx={{ paddingTop: { xs: "80px", lg: "0" } }}>
              <OrderButton />
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "100%", lg: "550px" },
              minWidth: { lg: "480px" },
            }}
          >
            <CardContactUs />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function CardContactUs() {
  const contactCardText = {
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "400",
    color: "#00000080",
    lineHeight: "21px",
  };

  return (
    <>
      <Box
        sx={{
          maxwidth: "550px",
          padding: { xs: "30px 20px", sm: "30px 40px", md: "43px 81px" },
          height: "100%",
          border: "2px solid #851A1D",
          textAlign: "left",
        }}
      >
        <Box sx={{ marginBottom: { xs: "20px", sm: "30px", md: "60px" } }}>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "24px", md: "36px" },
              color: "#851A1D",
              fontWeight: "600",
              fontFamily: "Oswald",
              paddingBottom: "24px",
            }}
          >
            {/* xs: "24px", sm: "35px", md: "45px", lg: "64px" */}
            Need Assistance?
          </Typography>
          <Typography sx={{ ...contactCardText }}>
            Reach out to us for prompt assistance. We're just a message away,
            dedicated to ensuring your dining is seamless and enjoyable.s
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: { xs: "20px", sm: "25px", md: "30px" },
            }}
          >
            <Image
              style={{ width: "40px", height: "auto" }}
              src={svgs.Location}
              alt="location logo"
            />
            <Box>
              <Typography
                sx={{
                  ...contactCardText,
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#851A1D",
                  paddingBottom: "5px",
                }}
              >
                Location
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                36 Westgate, Rotherham S60 1AS, United Kingdom
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                +44 1709 838899
              </Typography>
              <Box sx={{ padding: "20px 0" }}>
                <Typography sx={{ ...contactCardText }}>
                  Unit 1 A, The gateway retail park, Hillhouse lane, HD1 6EF
                </Typography>
                <Typography sx={{ ...contactCardText }}>
                  01484 244111
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: { xs: "20px", sm: "25px", md: "30px" },
            }}
          >
            {/* <Image
              style={{ width: "40px", height: "auto" }}
              src={svgs.Email}
              alt="location logo"
            /> */}
            <Box>
              <Typography
                sx={{
                  ...contactCardText,
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#851A1D",
                  paddingBottom: "5px",
                }}
              >
                Email
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                36 Westgate, Rotherham S60 1AS, United Kingdom
              </Typography>
            </Box>
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
            {/* <Image
              style={{ width: "12px", height: "auto" }}
              src={svgs.ArrowWhite}
              alt="white arrow"
            /> */}
          </Box>
        }
      >
        Order Now
      </Button>
    </>
  );
}
