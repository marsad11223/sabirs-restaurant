// src/components/Footer.js
"use client";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import Image from "next/image";
import webp from "@/_assets/webp";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { useRouter, usePathname } from "next/navigation";
import { scrollToId } from "@/app/utils/helpers";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

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
            src={webp.FooterMashroom}
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
            src={webp.Footerleaf}
            alt="FooterMashroom"
          />{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "836.5px",
            width: { lg: "100%" },
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
          <Box sx={{ maxWidth: "111px" }}>
            <Typography sx={{ ...hedding }} variant="h3">
              Quick Links
            </Typography>
            <Box sx={{ marginTop: "22px" }}>
              <Typography
                onClick={() => {
                  if (pathname === "/") {
                    scrollToId("ourmenu");
                  } else {
                    router.replace("/#ourmenu");
                  }
                }}
                sx={{
                  ...text,
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                Menu
              </Typography>
              <Typography
                onClick={() => {
                  if (pathname === "/") {
                    scrollToId("aboutus");
                  } else {
                    router.replace("/#aboutus");
                  }
                }}
                sx={{
                  ...text,
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                About Us
              </Typography>
              <Typography
                onClick={() => {
                  if (pathname === "/") {
                    scrollToId("location");
                  } else {
                    router.replace("/#location");
                  }
                }}
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
            {/* <Image
              style={{ height: "auto", width: "30px", cursor: "pointer" }}
              src={svgs.TwitterWhite}
              alt="footer links"
            /> */}
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

export default Footer;
