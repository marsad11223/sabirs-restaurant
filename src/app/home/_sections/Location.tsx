"use client";
import MapComponent from "@/_components/Map";
import { colors, fonts } from "@/app/utils/themes";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Location() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    fontFamily: '"Bebas Neue", sans-serif',
    textAlign: "center",
  };
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          md: "80px 40px",
          lg: "130px 80px",
        },
        backgroundImage: "url(bgLocation.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* hedding  */}
      <Typography
        data-aos="fade-left"
        data-aos-duration="1000"
        sx={{
          ...headingStyles,
          color: colors.secondaryYellow,
        }}
      >
        Come Find Your
      </Typography>
      <Typography
        data-aos="fade-right"
        data-aos-duration="1000"
        sx={{
          ...headingStyles,
          color: colors.White,
        }}
      >
        next meal
      </Typography>
      <Box
        sx={{
          paddingTop: {
            xs: "40px",
            md: "80px",
            lg: "130px",
          },
        }}
      >
        {/* Add the slider with menu items */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                xl: "space-around",
              },
              flexDirection: { sm: "row", xs: "column" },
              gap: { lg: "", md: "40px", sm: "20px", xs: "30px" },
              maxWidth: "1600px",
              width: "100%",
            }}
          >
            <LocationCard
              address="36 Westgate, Rotherham S60 1AS, United Kingdom"
              phoneNumber="01709 838899"
              src="https://maps.google.com/maps?q=Sabirs%2C%20Westgate%2C%20Rotherham%2C%20UK&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              title="Sabirs, Westgate, Rotherham, UK"
              ariaLabel="Sabirs, Westgate, Rotherham, UK"
            />
            <LocationCard
              address="224-230 London Rd, Highfield, Sheffield S2 4LW, United Kingdom"
              phoneNumber="0114 4790022"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76125.4595744351!2d-1.4992052!3d53.39836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487983b838a328f5%3A0x6662491a630e161f!2sSabirs%20Grill!5e0!3m2!1sen!2s!4v1740527893868!5m2!1sen!2s"
              title="9G9F+6G Sheffield, United Kingdom"
              ariaLabel="9G9F+6G Sheffield, United Kingdom"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CardProps {
  address: string;
  phoneNumber: string;
  src: string;
  title: string;
  ariaLabel: string;
}

const LocationCard: React.FC<CardProps> = ({
  address,
  phoneNumber,
  src,
  title,
  ariaLabel,
}) => {
  const textStyle = {
    fontSize: fonts.secondaryTypography,
    color: colors.White,
  };
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="1000"
      sx={{
        maxWidth: {
          xl: "530px",
          lg: "450px",
          md: "380px",
          sm: "250px",
          xs: "100%",
        },
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { lg: "600px", md: "500px", sm: "400px", xs: "400px" },
        }}
      >
        <MapComponent src={src} title={title} ariaLabel={ariaLabel} />
      </Box>

      <Box
        sx={{
          padding: "20px",
          textAlign: "left",
          backgroundColor: colors.black,
        }}
      >
        <Typography sx={{ ...textStyle }}>{address}</Typography>
        <Typography
          sx={{
            ...textStyle,
            marginTop: { xs: "10px", md: "25px", xl: "32px" },
          }}
        >
          {phoneNumber}
        </Typography>
      </Box>
    </Box>
  );
};
