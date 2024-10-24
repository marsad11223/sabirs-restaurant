"use client";

import MapComponent from "@/_components/map/Map";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Location({ title }: { title: string }) {
  const heddingBox = {
    height: { xs: "55px", sm: "98px", lg: "117px" },
    width: { xs: "220px", sm: "400px", lg: "490px" },
    clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50% , -50% )",
  };
  return (
    <Box
      id="location"
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "40px 16px",
            sm: "40px 32px",
            md: "80px 64px 0 64px",
            lg: "100px 80px 200px 80px",
          },
          maxWidth: "1400px",
          m: "0 auto",
          position: "relative",
        }}
      >
        {/* hedding  */}
        <Box sx={{ paddingBottom: { xs: "60px", sm: "100px", lg: "150px" } }}>
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                color: "#851A1D",
                fontSize: { xs: "24px", sm: "35px", md: "45px", lg: "64px" },
                fontWeight: "700",
                fontFamily: "Oswald",
                position: "relative",
                zIndex: "10",
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                ...heddingBox,
                zIndex: "9",
                backgroundColor: "#ffffff",
              }}
            ></Box>
            <Box
              sx={{
                ...heddingBox,
                marginTop: { xs: "9px", lg: "12px" },
                width: { xs: "227px", sm: "420px", lg: "500px" },
                zIndex: "8",
                backgroundColor: "#851A1D",
              }}
            ></Box>
          </Box>
        </Box>
        <Box sx={{ position: "relative", zIndex: "10" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "48px",
              padding: {
                xs: "40px 20px",
                sm: "90px 60px",
                md: "80px 40px",
                lg: "130px 80px",
              },
              position: "relative",
              zIndex: "10",
            }}
          >
            {/* Add the slider with menu items */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  lg: "space-around",
                  sm: "center",
                  xs: "center",
                },
                flexDirection: { sm: "row", xs: "column" },
                m: "0 auto",
                gap: { lg: "", md: "40px", sm: "20px", xs: "30px" },
              }}
            >
              <LocationCard
                address={"36 Westgate, Rotherham S60 1AS, United Kingdom"}
                tell={"+44 1709 838899"}
                lat={53.4321}
                lng={-1.35746}
                route="/order-huddersfield"
              />
              <LocationCard
                address={
                  "Unit 1 A, The gateway retail park, Hillhouse lane, HD1 6EF"
                }
                tell={"01484 244111"}
                lat={53.65738}
                lng={-1.78314}
                route="/order-rotherham"
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
  route: string;
}

const LocationCard: React.FC<CardProps> = ({
  address,
  tell,
  lat,
  lng,
  route,
}) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        color: "#711619",
        fontSize: "24px",
        maxWidth: { lg: "450px", md: "350px", sm: "250px", xs: "100%" },
      }}
    >
      <Box
        sx={{
          width: { lg: "450px", md: "350px", sm: "250px", xs: "100%" },
          height: { lg: "600px", md: "500px", sm: "400px", xs: "400px" },
          border: "4px solid #711619",
          borderRadius: "12px",
        }}
      >
        <MapComponent lat={lat} lng={lng} />
      </Box>
      <Typography
        sx={{
          fontSize: { md: "24px", sm: "18px", xs: "18px" },
          m: { lg: "20px 0 ", sm: "15px 0", xs: "10px" },
        }}
      >
        {address}
      </Typography>
      <Typography
        sx={{
          fontSize: { md: "24px", sm: "18px", xs: "18px" },
          borderBottom: "1px solid #711619",
          display: "inline",
        }}
      >
        <a href={`tel:${tell}`}>{tell}</a>
      </Typography>
      <br />
      <Button
        sx={{
          width: "100px",
          p: "10px 20px",
          backgroundColor: "#711619",
          color: "white",
          borderRadius: "50px",
          mt: "20px",
        }}
        onClick={() => router.push(route)}
      >
        Order
      </Button>
    </Box>
  );
};
