"use client";
import svgs from "@/_assets/svgs";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FooterProps {
  applyBorderTop?: boolean;
}

const Footer = ({ applyBorderTop = true }: FooterProps) => {
  const router = useRouter();

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    color: colors.primaryRed,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  const textStyles = {
    color: colors.smokeGray,
    textTransform: "capitalize",
    fontSize: fonts.tertiaryTypography,
    lineHeight: fonts.tertiaryTypography,
    cursor: "pointer",
    transition:
      "color 0.4s ease-in-out, text-shadow 0.6s ease-in-out , scale .3s ease-in-out",
    "&:hover": {
      color: colors.primaryRed,
      textShadow: `1px 3px 4px ${colors.smokeGray}`,
      scale: "1.1",
    },
  };

  return (
    <>
      <Box
        sx={{
          borderTop: applyBorderTop
            ? {
                xs: `4px solid ${colors.secondaryYellow}`,
                md: `6px solid ${colors.secondaryYellow}`,
                xl: `10px solid ${colors.secondaryYellow}`,
              }
            : "none",
        }}
      >
        <Box
          sx={{
            borderTop: applyBorderTop
              ? {
                  xs: `4px solid ${colors.darkGrey}`,
                  md: `6px solid ${colors.darkGrey}`,
                  xl: `10px solid ${colors.darkGrey}`,
                }
              : "none",
          }}
        >
          <Box
            sx={{
              backgroundImage:
                "url(https://res.cloudinary.com/ddixiuh7h/image/upload/v1751361372/sabir%27s/backgroundImages/footerLogo_xkkrwx.webp)",
              backgroundPosition: "center center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              margin: {
                xs: "40px 30px",
                sm: "30px 50px",
                md: "40px 100px",
                lg: "60px 150px",
                xl: "60px 200px",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "1400px",
                display: "flex",
                justifyContent: { xs: "space-between" },
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                gap: "50px",
                alignItems: { xs: "center", sm: "inherit" },
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    sm: "200px",
                    md: "250px",
                    lg: "340px",
                    xl: "400px",
                  },
                  width: "100%",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Image
                  onClick={() => router.push("home")}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  src={svgs.Logo}
                  alt="logo"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: { xs: "20px", sm: "30px", lg: "40px" },
                }}
              >
                <Typography
                  sx={{
                    ...headingStyles,
                    textAlign: { xs: "center ", sm: "inherit" },
                  }}
                >
                  quick links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    gap: { xs: "14px", md: "10px", lg: "15px" },
                    flexDirection: { xs: "row", sm: "column" },
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{ ...textStyles }}
                    onClick={() => router.push("home")}
                  >
                    Home
                  </Typography>
                  <Typography
                    onClick={() => router.push("about-us")}
                    sx={{ ...textStyles }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    sx={{ ...textStyles }}
                    onClick={() => router.push("our-food")}
                  >
                    Our Food
                  </Typography>
                  <Typography
                    sx={{ ...textStyles }}
                    onClick={() => router.push("order")}
                  >
                    Order
                  </Typography>
                  <Typography
                    onClick={() => router.push("contact-us")}
                    sx={{ ...textStyles }}
                  >
                    Contact
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: { xs: "20px", sm: "30px", lg: "40px" },
                }}
              >
                <Typography
                  sx={{
                    ...headingStyles,
                    textAlign: { xs: "center ", sm: "inherit" },
                  }}
                >
                  Follow
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: { xs: "14px", md: "10px", lg: "15px" },
                    flexDirection: { xs: "row", sm: "column" },
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      ...textStyles,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <a
                      href="https://www.facebook.com/sabirsgrill/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </Typography>
                  <Typography
                    sx={{
                      ...textStyles,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <a
                      href="https://www.instagram.com/sabirsgrill/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </Typography>
                  <Box
                    sx={{
                      display: {
                        xs: "flex",
                        sm: "none",
                      },
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="https://www.facebook.com/sabirsgrill/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                          }}
                          src={svgs.Facebook}
                          alt="facebook"
                        />
                        <Typography sx={{ ...textStyles, opacity: "1" }}>
                          Facebook
                        </Typography>
                      </Box>
                    </a>
                    <a
                      href="https://www.instagram.com/sabirsgrill/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                          }}
                          src={svgs.Instagram}
                          alt="instagram"
                        />
                        <Typography sx={{ ...textStyles, opacity: "1" }}>
                          Instagram
                        </Typography>
                      </Box>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "20px", md: "25px" },
          textAlign: "center",
          backgroundColor: colors.darkGrey + "10",
        }}
      >
        <Typography
          sx={{
            color: colors.smokeGray,
            fontSize: fonts.tertiaryTypography,
            fontFamily: '"Roboto", sans-serif', // More modern alternative
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            "&:hover": {
              "& span:last-child": {
                color: colors.primaryRed,
                textShadow: `1px 2px 3px ${colors.smokeGray}`,
              },
            },
          }}
        >
          <span>© {2025} All Rights Reserved</span>
          <span
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              marginLeft: "8px",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Powered by QashNova
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
