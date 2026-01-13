"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import LocationCard, { MapData, InfoItem } from "../../components/LocationCard";

interface LocationData {
  mapData: MapData;
  infoItems: InfoItem[];
}

export default function FoodWorthTheTrip() {
  const locations: LocationData[] = [
    {
      mapData: {
        src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2380.615169997593!2d-1.4787846227171986!3d53.368041772295626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1767278580548!5m2!1sen!2s",
        title: "Sabirs Grill, Sheffield",
        ariaLabel: "Sabirs Grill, Sheffield",
      },
      infoItems: [
        {
          iconSrc: svgs.goldLocation,
          title: "Address",
          typography:
            "224-230 London Rd, Highfield, Sheffield S2 4LW, United Kingdom",
        },
        {
          iconSrc: svgs.goldTime,
          title: "Timing",
          typography:
            "Monday - Sunday: See our Order page for latest times or call ahead.",
        },
        {
          iconSrc: svgs.goldContact,
          title: "Contact",
          typography: "0114 4790022",
        },
      ],
    },
    {
      mapData: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.2219901357685!2d-1.3599749227142242!3d53.428738972313305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487976f6621859d1%3A0x54982835b832167a!2s36%20Westgate%2C%20Rotherham%20S60%201AS%2C%20UK!5e0!3m2!1sen!2s!4v1767278674637!5m2!1sen!2s",
        title: "Sabirs, Westgate, Rotherham, UK",
        ariaLabel: "Sabirs, Westgate, Rotherham, UK",
      },
      infoItems: [
        {
          iconSrc: svgs.goldLocation,
          title: "Address",
          typography: "36 Westgate, Rotherham S60 1AS, United Kingdom",
        },
        {
          iconSrc: svgs.goldTime,
          title: "Timing",
          typography:
            "Monday - Sunday: See our Order page for latest times or call ahead.",
        },
        {
          iconSrc: svgs.goldContact,
          title: "Contact",
          typography: "01709 838899",
        },
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      {/* Main Content Area */}
      <Box sx={{ padding: sectionPadding }}>
        {/* Title Section */}
        <Box sx={{ textAlign: "center", maxWidth: "680px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            Food Worth
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.primaryRed,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
            }}
          >
            The Trip
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: colors.darkGrey,
              marginTop: { xs: "16px", md: "20px" },
            }}
          >
            Expect generous portions, comforting favourites, and flavours that
            keep people coming back. Eat in, take away, or order ahead — good
            food is always waiting.
          </Typography>
        </Box>

        {/* Location Cards */}
        <Box
          sx={{
            marginTop: { xs: "40px", md: "80px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: "20px", md: "30px", lg: "40px" },
            maxWidth: "1440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              mapData={location.mapData}
              infoItems={location.infoItems}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
