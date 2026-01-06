"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";
import MapComponent from "@/_components/Map";

export interface MapData {
  src: string;
  title: string;
  ariaLabel: string;
}

export interface InfoItem {
  iconSrc: StaticImageData | string;
  title: string;
  typography: string;
}

export interface LocationCardProps {
  mapData: MapData;
  infoItems: InfoItem[];
}

export default function LocationCard({
  mapData,
  infoItems,
}: LocationCardProps) {
  return (
    <Box
      sx={{
        border: "5px solid",
        borderColor: colors.secondaryYellow,
        padding: { xs: "10px", md: "20px", lg: "40px" },
        backgroundColor: colors.primaryRed,
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Map Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "350px", md: "400px" },
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <MapComponent
          src={mapData.src}
          title={mapData.title}
          ariaLabel={mapData.ariaLabel}
        />
      </Box>

      {/* Information Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "16px", sm: "20px" },
          marginTop: { xs: "20px", md: "40px" },
        }}
      >
        {infoItems.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            <Box
              sx={{
                width: "14px",
                height: "14px",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              <Image
                src={item.iconSrc}
                alt={item.title}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: fonts.p4,
                  lineHeight: fonts.p4,
                  fontWeight: "700",
                  color: colors.secondaryYellow,
                  marginBottom: "4px",
                }}
              >
                {item.title}:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: colors.White,
                  lineHeight: "1.5",
                }}
              >
                {item.typography}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
