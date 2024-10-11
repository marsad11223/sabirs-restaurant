"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import svgs from "../../_assets/svgs/index";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar open/close state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: {
            xs: "20px",
            sm: "20px 30px",
            md: "20px 80px",
            lg: "20px 100px",
            xl: "20px 120px",
          },
          backgroundColor: "#FFFFFF",
          color: "#00000080",
          borderBottom: { xs: "5px solid #851A1D", lg: "9px solid #851A1D" },
        }}
      >
        {/* Logo */}
        <Box sx={{ width: "100%", maxWidth: "114px", height: "auto" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={svgs.Logo}
            alt="Picture of the author"
          />
        </Box>

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            alignItems: "center",
            gap: { md: "10px", lg: "15px", xl: "28px" },
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: { xs: "500", md: "600" },
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Typography
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "#00000080",
            }}
          >
            MENU
          </Typography>
          <Typography
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "#00000080",
            }}
          >
            ABOUT
          </Typography>
          <Typography
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "#00000080",
            }}
          >
            LOCATION
          </Typography>
          <Typography
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "#00000080",
            }}
          >
            CONTACT
          </Typography>
        </Box>

        {/* Social Media Icons and Search */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", lg: "30px" },
              backgroundColor: "#F8F8F8",
              padding: { xs: "10px 25px", lg: "15px 30px" },
              borderRadius: "30px",
              maxWidth: { xs: "200px", md: "270px" },
            }}
          >
            <Box
              sx={{ width: { xs: "120px", md: "180px", overflow: "hidden" } }}
            >
              <input
                placeholder="Search"
                type="text"
                style={{
                  fontSize: "16px",
                  fontWeight: "300",
                  color: "#00000080",
                  outline: "none",
                  border: "none",
                  backgroundColor: "#F8F8F8",
                }}
              />
            </Box>
            <Box sx={{ width: "17px", height: "auto" }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.Search}
                alt="Search"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", md: "20px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "15px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.Twitter}
                alt="Twitter"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "15px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <Image src={svgs.Instagram} alt="Instagram" />
            </Box>
            <Box
              sx={{
                width: { xs: "15px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.Facebook}
                alt="Facebook"
              />
            </Box>
          </Box>
        </Box>

        {/* Hamburger Icon for Mobile */}
        <Box
          sx={{
            width: "30px",
            height: "auto",
            display: { xs: "block", lg: "none" },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={svgs.Hamburger}
            alt="Hamburger"
            onClick={toggleSidebar} // Toggle sidebar on hamburger click
          />
        </Box>
      </Box>

      {/* Sidebar and Overlay */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: sidebarOpen ? { xs: "60%", sm: "40%" } : "0", // 40% width when open
          height: "100vh",
          background: "linear-gradient(90deg, #541113 0%, #851A1D 100%)",
          boxShadow: sidebarOpen ? "-5px 0 15px rgba(0, 0, 0, 0.3)" : "none",
          overflowX: "hidden",
          transition: "0.3s", // Smooth transition
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: { xs: "10px", lg: "30px" },
            backgroundColor: "#F8F8F8",
            padding: { xs: "8px 12px", lg: "15px 30px" },
            marginTop: "10vh",
            marginLeft: "20px",
            marginRight: "20px",
            borderRadius: "20px",
            // maxWidth: "70vw",
          }}
        >
          <Box sx={{ overflow: "hidden", width: "100%" }}>
            <input
              placeholder="Search"
              type="text"
              style={{
                fontSize: "16px",
                fontWeight: "300",
                color: "#00000080",
                outline: "none",
                border: "none",
                backgroundColor: "#F8F8F8",
                width: "100%",
              }}
            />
          </Box>
          <Box sx={{ width: "17px", height: "auto" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={svgs.Search}
              alt="Search"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#ffffff",
            }}
          >
            MENU
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#ffffff",
            }}
          >
            ABOUT
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#ffffff",
            }}
          >
            LOCATION
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#ffffff",
            }}
          >
            CONTACT
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "15px", sm: "25px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "20px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.TwitterWhite}
                alt="Twitter"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "20px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.InstagramWhite}
                alt="Instagram"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "20px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.FacebookWhite}
                alt="Facebook"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Blue Overlay */}
      {sidebarOpen && (
        <Box
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%", // 60% blue overlay
            height: "100vh",
            backgroundColor: "rgba(128, 128, 128, 0.3)", // Medium grey with transparency
            zIndex: 999,
            backdropFilter: "blur(10px)", // Blur effect
            transition: "0.3s",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
