"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import svgs from "../../_assets/svgs/index";
import { useRouter, usePathname } from "next/navigation";
import { scrollToId } from "@/app/utils/helpers";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // dropdown code
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          margin: "auto",
          backgroundColor: "#FFFFFF",
          borderBottom: { xs: "5px solid #851A1D", lg: "9px solid #851A1D" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* maxwidth container  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: {
              xs: "20px",
              sm: "20px 30px",
              md: "20px 80px",
              lg: "20px 80px",
              xl: "20px 120px",
            },
            color: "#00000080",
            maxWidth: "1500px",
            width: "100%",
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
              fontSize: { xs: "16px", xl: "20px" },
              fontWeight: { xs: "500", md: "600" },
              display: { xs: "none", lg: "flex" },
            }}
          >
            <Typography
              onClick={() => {
                if (pathname === "/") {
                  scrollToId("ourmenu");
                } else {
                  router.replace("/#ourmenu");
                }
              }}
              sx={{
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "#00000080",
                cursor: "pointer",
                transition: "color 0.3s ease-in, text-shadow 0.6s ease-in",
                "&:hover": {
                  color: "#851A1D",
                  textShadow: "3px 3px 4px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              MENU
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
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "#00000080",
                cursor: "pointer",
                transition: "color 0.3s ease-in, text-shadow 0.6s ease-in",
                "&:hover": {
                  color: "#851A1D",
                  textShadow: "3px 3px 4px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              ABOUT
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
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "#00000080",
                cursor: "pointer",
                transition: "color 0.3s ease-in, text-shadow 0.6s ease-in",
                "&:hover": {
                  color: "#851A1D",
                  textShadow: "3px 3px 4px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              LOCATION
            </Typography>
            <Typography
              onClick={() => router.push("/contactUs")}
              sx={{
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "#00000080",
                cursor: "pointer",
                transition: "color 0.3s ease-in, text-shadow 0.6s ease-in",
                "&:hover": {
                  color: "#851A1D",
                  textShadow: "3px 3px 4px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              CONTACT
            </Typography>
            {/* order dropdown  */}
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                width: "auto",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "#00000080",
                cursor: "pointer",
                transition: "all 2s ease-in",
              }}
              onMouseLeave={toggleDropdown}
            >
              <Typography
                onClick={() => router.push("/order")}
                onMouseEnter={toggleDropdown}
                sx={{
                  cursor: "pointer",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  color: "#00000080",
                  display: "inline-flex",
                  alignItems: "center",
                  transition:
                    "all 0.3s ease-in, text-shadow 0.6s ease-in , color 0.3s ease-in",
                  "&:hover": {
                    color: "#851A1D",
                    textShadow: "3px 3px 4px rgba(255, 255, 255, 0.5)",
                  },
                }}
              >
                ORDER
                <ArrowDropDownIcon
                  sx={{
                    marginLeft: "4px",
                    fontSize: "20px",
                    color: "#851A1D",
                  }} // Set to #851A1D
                />
              </Typography>

              <div
                style={{
                  display: open ? "block" : "none",
                  position: "absolute",
                  backgroundColor: "#f9f9f9",
                  width: "auto",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  zIndex: 1,
                  textWrap: "nowrap",
                  borderRadius: "4px",
                }}
              >
                <Typography
                  sx={{
                    padding: "20px 25px",
                    cursor: "pointer",
                    color: "initial",
                    transition:
                      "color 0.5s ease-in, background-color 0.5s ease-in",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#851A1D",
                    },
                  }}
                  onClick={() => router.push("./order-rotherham")}
                >
                  Order Rotherham
                </Typography>
                <Typography
                  sx={{
                    padding: "20px 25px",
                    cursor: "pointer",
                    color: "initial",
                    transition:
                      "color 0.5s ease-in, background-color 0.5s ease-in",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#851A1D",
                    },
                  }}
                  onClick={() => router.push("./order-huddersfield")}
                >
                  Order Huddersfield
                </Typography>
              </div>
            </Box>
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
                gap: { xs: "10px", md: "20px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "15px", sm: "25px", lg: "30px" },
                  height: "auto",
                }}
              >
                {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                {/* <Image
                style={{ width: "100%", height: "100%" }}
                src={svgs.Twitter}
                alt="Twitter"
              /> */}
                {/* </a> */}
              </Box>
              <Box
                sx={{
                  width: { xs: "15px", sm: "25px", lg: "30px" },
                  height: "auto",
                }}
              >
                <a
                  href="https://www.instagram.com/sabirsgrill/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={svgs.Instagram}
                    alt="Facebook"
                  />
                </a>
              </Box>
              <Box
                sx={{
                  width: { xs: "15px", sm: "25px", lg: "30px" },
                  height: "auto",
                }}
              >
                <a
                  href="https://www.facebook.com/sabirsgrill/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={svgs.Facebook}
                    alt="Facebook"
                  />
                </a>
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
          transition: "0.3s",
          zIndex: 1000,
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", lg: "30px" },
            backgroundColor: "#F8F8F8",
            padding: { xs: "8px 12px", lg: "15px 30px" },
            marginTop: "10vh",
            marginLeft: "20px",
            marginRight: "20px",
            borderRadius: "20px",
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
        </Box> */}
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
            onClick={() => {
              if (pathname === "/") {
                scrollToId("ourmenu");
              } else {
                router.replace("/#ourmenu");
              }
              toggleSidebar();
            }}
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
            onClick={() => {
              if (pathname === "/") {
                scrollToId("aboutus");
              } else {
                router.replace("/#aboutus");
              }
              toggleSidebar();
            }}
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
            onClick={() => {
              if (pathname === "/") {
                scrollToId("location");
              } else {
                router.replace("/#location");
              }
              toggleSidebar();
            }}
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
            onClick={() => router.push("/contactUs")}
            variant="h6"
            sx={{
              cursor: "pointer",
              fontSize: { xs: "14px", sm: "16px" },
              color: "#ffffff",
            }}
          >
            CONTACT
          </Typography>
          {/* menu dropdown  */}
          <Box
            style={{
              position: "relative",
              display: "inline-block",
              width: "auto",
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "#00000080",
              cursor: "pointer",
              transition: "all 2s ease-in",
            }}
            onMouseLeave={toggleDropdown}
          >
            <Typography
              onClick={() => router.push("/order")}
              onMouseEnter={toggleDropdown}
              style={{
                cursor: "pointer",
                fontSize: "inherit",
                fontWeight: "500",
                color: "#ffffff",
                display: "inline",
                transition: "all 2s ease-in",
              }}
            >
              ORDER
              <ArrowDropDownIcon
                style={{
                  marginLeft: "4px",
                  fontSize: "20px",
                  color: "#ffffff",
                  paddingTop: "8px",
                }}
              />
            </Typography>

            <div
              style={{
                display: open ? "block" : "none",
                position: "absolute",
                backgroundColor: "#f9f9f9",
                width: "auto",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                zIndex: 1,
                textWrap: "nowrap",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  padding: "15px 10px",
                  cursor: "pointer",
                  color: "initial",
                  transition:
                    "color 0.5s ease-in, background-color 0.5s ease-in",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#851A1D",
                  },
                }}
                onClick={() => router.push("/order-rotherham")}
              >
                Order Rotherham
              </Typography>
              <Typography
                sx={{
                  padding: "15px 10px",
                  cursor: "pointer",
                  color: "initial",
                  transition:
                    "color 0.5s ease-in, background-color 0.5s ease-in",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#851A1D",
                  },
                }}
                onClick={() => router.push("/order-huddersfield")}
              >
                Order Huddersfield
              </Typography>
            </div>
          </Box>
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
              <a
                href="https://www.instagram.com/sabirsgrill/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={svgs.InstagramWhite}
                  alt="Instagram"
                />
              </a>
            </Box>
            <Box
              sx={{
                width: { xs: "20px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <a
                href="https://www.facebook.com/sabirsgrill/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={svgs.FacebookWhite}
                  alt="Facebook"
                />
              </a>
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
