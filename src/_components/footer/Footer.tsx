// src/components/Footer.js
"use client";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const text = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14px",
    color: "#D9D9D9",
  };
  const hedding = {
    color: "#ffffff",
    fontFamily: "Oswald",
    fontSize: "24px",
    fontWeight: "600",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: {
            xs: "60px 20px 25px 20px",
            md: "60px 0 25px 0",
            lg: "85px 0 40px 0",
          },
          background: "linear-gradient(90deg, #541113 0%, #851A1D 100%)",
        }}
      >
        {/* positioned images */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            height: "auto",
            width: "100%",
            maxWidth: { xs: "150px", lg: "206px" },
            position: "absolute",
            right: "0",
            bottom: "0",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            src={pngs.FooterMashroom}
            alt="FooterMashroom"
          />{" "}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            height: "auto",
            maxWidth: { xs: "150px", lg: "217px" },
            width: "100%",
            position: "absolute",
            left: "0",
            bottom: "0",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            src={pngs.Footerleaf}
            alt="FooterMashroom"
          />{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
            // alignItems: "flexStart"
            maxWidth: "836.5px",
            gap: { xs: "60px", md: "40px", lg: "100px" },
          }}
        >
          <Box sx={{ maxWidth: "240px" }}>
            <Box sx={{ width: "114px", height: "auto" }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.FooterLogo}
                alt="footer logo"
              />
            </Box>
            <Typography
              sx={{
                ...text,
                marginTop: "22px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod that a tempor incididunt ut labore.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "274px" }}>
            <Typography
              sx={{
                ...hedding,
              }}
              variant="h3"
            >
              Newsletter
            </Typography>
            <Typography
              sx={{
                ...text,
                marginTop: "22px",
              }}
            >
              Stay Brew-tally Informed! Subscribe to our newsletter and unlock a
              world of rich culinary experiences and cooking tips to elevate
              your daily grind.
            </Typography>
            <Box sx={{ marginTop: "22px" }}>
              <FooterButton />
            </Box>
          </Box>
          <Box sx={{ maxWidth: "111px" }}>
            <Typography sx={{ ...hedding }} variant="h3">
              Quick Links
            </Typography>
            <Box sx={{ marginTop: "22px" }}>
              <Typography
                sx={{
                  ...text,
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                Menu
              </Typography>
              <Typography
                sx={{
                  ...text,
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  ...text,
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                Location
              </Typography>
              <Typography
                onClick={() => router.push("/contactUs")}
                sx={{
                  ...text,
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { lg: "855px", xl: "1000px" },
            width: "100%",
            marginTop: "85px",
          }}
        >
          <Divider
            sx={{
              marginBottom: "20px",
              border: {
                xs: "1px solid #FFD40D",
                sm: "2px solid #FFD40D",
                md: "4px solid #FFD40D",
              },
              width: "100%",
            }}
          />
          <Box sx={{ display: "flex", gap: "30px" }}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
            <Image
              style={{ height: "auto", width: "30px", cursor: "pointer" }}
              src={svgs.TwitterWhite}
              alt="footer links"
            />
            {/* </a> */}
            <a
              href="https://www.instagram.com/sabirsgrill/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                style={{ height: "auto", width: "30px", cursor: "pointer" }}
                src={svgs.InstagramWhite}
                alt="footer links"
              />
            </a>
            <a
              href="https://www.facebook.com/sabirsgrill/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                style={{ height: "auto", width: "30px", cursor: "pointer" }}
                src={svgs.FacebookWhite}
                alt="footer links"
              />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export function FooterButton() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "40px",
        backgroundColor: "#FFFFFF",
        width: "100%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Your Email"
        fullWidth
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "50px",
            fontSize: "12px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-input": {
            fontSize: "12px",
          },
          "& input::placeholder": {
            fontSize: "12px",
          },
          paddingRight: "0px", // Adjust padding if needed
        }}
      />
      <Button
        sx={{
          backgroundColor: "#8A1D1B",
          color: "#FFFFFF",
          borderRadius: "40px",
          fontSize: "8px",
          fontWeight: "700",
          display: "flex",
          width: "160px",
          alignItems: "center",
          marginRight: "8px",
          "&:hover": {
            backgroundColor: "#701414",
          },
        }}
      >
        SUBMIT NOW
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            height: "24px",
            width: "24px",
            position: "relative",
            marginLeft: "5px",
          }}
        >
          <Image
            src={svgs.ArrowRed}
            alt="Arrow Icon"
            width={10}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
      </Button>

      <style jsx global>{`
        @media (max-width: 600px) {
          [data-lastpass-icon-root] {
            display: none !important;
          }
        }
      `}</style>
    </Box>
  );
}

export default Footer;
