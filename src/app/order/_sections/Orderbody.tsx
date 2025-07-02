import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Box, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@/_components/Button";
import MapComponent from "@/_components/Map";
import { fonts, colors } from "@/app/utils/themes";

export default function Orderbody() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          padding: { xs: "40px 20px", sm: "50px 80px", md: "100px 80px" },
          backgroundImage:
            "url(https://res.cloudinary.com/ddixiuh7h/image/upload/v1751361377/sabir%27s/backgroundImages/worldMap_tjk8ek.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <Typography
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.primaryRed,
          }}
        >
          Order Now
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          Feast Later
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            sx={{
              maxWidth: "1600px",
              gap: { lg: "100px", xl: "200px" },
              justifyContent: "center",
              alignItems: "center",
            }}
            container
          >
            <LocationCard
              address="36 Westgate, Rotherham S60 1AS, United Kingdom"
              phoneNumber="01709 838899"
              src="https://maps.google.com/maps?q=Sabirs%2C%20Westgate%2C%20Rotherham%2C%20UK&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              title="Sabirs, Westgate, Rotherham, UK"
              ariaLabel="Sabirs, Westgate, Rotherham, UK"
              onClick={() => {
                router.push("/order-rotherham");
              }}
            />
            <LocationCard
              address="224-230 London Rd, Highfield, Sheffield S2 4LW, United Kingdom"
              phoneNumber="0114 4790022"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76125.4595744351!2d-1.4992052!3d53.39836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487983b838a328f5%3A0x6662491a630e161f!2sSabirs%20Grill!5e0!3m2!1sen!2s!4v1740527893868!5m2!1sen!2s"
              title="9G9F+6G Sheffield, United Kingdom"
              ariaLabel="9G9F+6G Sheffield, United Kingdom"
              onClick={() => {
                router.push("/order-sheffield");
              }}
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

interface LocationCardProps {
  address: string;
  phoneNumber: string;
  src: string;
  title: string;
  ariaLabel: string;
  onClick: () => void;
}

function LocationCard({
  address,
  phoneNumber,
  src,
  title,
  ariaLabel,
  onClick,
}: LocationCardProps) {
  const router = useRouter();
  return (
    <Grid
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      item
      xs={12}
      lg={5}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        marginTop: { xs: "40px", sm: "50px", md: "100px" },
      }}
    >
      <Box>
        <Box
          sx={{
            height: { xs: "400px", md: "500px", lg: "600px", xl: "700px" },
            width: "100%",
          }}
        >
          <MapComponent src={src} title={title} ariaLabel={ariaLabel} />
        </Box>
        <Box
          sx={{
            backgroundColor: colors.primaryRed,
            padding: "30px",
            color: colors.White,
            display: "flex",
            justifyContent: "space-between",
            alignItems: { sx: "flex-start", sm: "center" },
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography>{address}</Typography>
            <Typography>{phoneNumber}</Typography>
          </Box>
          <Button
            styles={{
              "&:hover": {
                backgroundColor: colors.secondaryYellow,
              },
            }}
            onClick={onClick}
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
