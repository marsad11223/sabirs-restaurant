"use client";

import MapComponent from "@/_components/map/Map";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function Location() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "40px 16px",
            sm: "40px 32px",
            md: "80px 64px",
            lg: "100px 80px 200px 80px",
          },
          maxWidth: "1400px",
          m: "0 auto",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", zIndex: "10" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "48px",
              padding: {
                xs: "40px 20px",
                sm: "90px 60px",
                md: "100px 70px",
                lg: "130px 80px",
              },
              position: "relative",
              zIndex: "10",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                paddingBottom: { xs: "40px", sm: "60px", lg: "100px" },
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
                OUR LOCATION
              </Typography>
            </Box>
            {/* Add the slider with menu items */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                m: "0 auto",
              }}
            >
              <LocationCard
                address={"36 Westgate, Rotherham S60 1AS, United Kingdom"}
                tell={"+44 1709 838899"}
                lat={53.4321}
                lng={-1.35746}
              />
              <LocationCard
                address={
                  "Unit 1 A, The gateway retail park, Hillhouse lane, HD1 6EF"
                }
                tell={"01484 244111"}
                lat={53.65738}
                lng={-1.78314}
              />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              backgroundColor: "#851A1D",
              borderRadius: "48px",
              zIndex: "1",
              transform: "rotate(-3deg)",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CardProps {
  address: string;
  tell: string;
  lat: number;
  lng: number;
}

const LocationCard: React.FC<CardProps> = ({ address, tell, lat, lng }) => {
  return (
    <Box sx={{ color: "#711619", fontSize: "24px", maxWidth: "450px" }}>
      <Box
        sx={{
          width: "450px",
          height: "600px",
          border: "4px solid #711619",
          borderRadius: "12px",
        }}
      >
        <MapComponent lat={lat} lng={lng} />
      </Box>
      <Typography sx={{ fontSize: "24px", m: "20px 0 " }}>{address}</Typography>
      <Typography
        sx={{
          fontSize: "24px",
          borderBottom: "1px solid #711619",
          display: "inline",
        }}
      >
        <a href={`tel:${tell}`}>{tell}</a>
      </Typography>
    </Box>
  );
};
