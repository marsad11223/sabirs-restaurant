"use client";
/**
 * LocationCard Component
 * 
 * A generic, reusable component for displaying location information with a map and details.
 * 
 * @example
 * ```tsx
 * import LocationCard, { MapData, InfoItem } from "../components/LocationCard";
 * import svgs from "@/_assets/svgs";
 * 
 * const locationData = {
 *   // Map/Iframe data
 *   mapData: {
 *     src: "https://maps.google.com/maps?q=...",
 *     title: "Location Name",
 *     ariaLabel: "Location Name for accessibility",
 *   },
 *   // Array of information items that will be mapped
 *   infoItems: [
 *     {
 *       iconSrc: svgs.LocationYellowIcon, // Icon image source
 *       title: "Address", // Title text (will have ":" appended)
 *       typography: "123 Main St, City, Country", // Detailed text content
 *     },
 *     {
 *       iconSrc: svgs.ClockIcon, // Replace with your clock icon
 *       title: "Timing",
 *       typography: "Monday - Sunday: 10 AM - 10 PM",
 *     },
 *     {
 *       iconSrc: svgs.PhoneIcon, // Replace with your phone icon
 *       title: "Contact",
 *       typography: "+1 234 567 8900",
 *     },
 *   ],
 * };
 * 
 * <LocationCard mapData={locationData.mapData} infoItems={locationData.infoItems} />
 * ```
 */
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
      }}
    >
      {/* Map Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "350px", md: "400px" },
          position: "relative",
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

