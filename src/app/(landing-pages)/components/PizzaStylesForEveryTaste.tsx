"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FeatureCard2Props {
  title: string;
  description: string;
}

function FeatureCard2({ title, description }: FeatureCard2Props) {
  return (
    <Box
      sx={{
        paddingLeft: "15px",
        borderLeft: { xs: "2px solid #6D1212", md: "3px solid #6D1212" },
      }}
    >
      <Typography
        sx={{
          fontSize: fonts.primaryTypography,
          color: "#6D1212",
          fontFamily: '"Bebas Neue", sans-serif',
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: fonts.p5,
          color: "#00000080",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default function PizzaStylesForEveryTaste() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      {/* Main Content Area */}
      <Box
        sx={{
          padding: sectionPadding,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          justifyContent: "space-between",
          gap: { xs: "30px", sm: "40px", md: "50px" },
          flexWrap: "nowrap",
          margin: "auto",
          maxWidth: "1440px",
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            textAlign: "left !important",
            width: {
              md: "calc(50% - 20px)",
              lg: "calc(50% - 50px)",
              xl: "calc(50% - 80px)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
              textAlign: "left !important",
            }}
          >
            Pizza Styles for
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.primaryRed,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
              textAlign: "left !important",
            }}
          >
            Every Taste
          </Typography>
          <Typography
            sx={{
              fontSize: fonts.p4,
              lineHeight: fonts.p4,
              color: colors.darkGrey,
              marginTop: { xs: "16px", md: "20px" },
              textAlign: "left !important",
            }}
          >
            Whether you like it simple or fully loaded, our pizza range has
            something for everyone.
          </Typography>
        </Box>

        {/* Four Feature Cards */}
        <Box
          sx={{
            width: { md: "50%" },
            "& > *:not(:last-child)": {
              marginBottom: { xs: "20px", md: "40px" },
            },
            maxWidth: "500px",
          }}
        >
          <FeatureCard2
            title="Classic Pizzas"
            description="Timeless favourites made with rich sauce and melted cheese."
          />
          <FeatureCard2
            title="Meaty Pizzas"
            description="Hearty, filling pizzas stacked with flavour and generous toppings."
          />
          <FeatureCard2
            title="Signature Specials"
            description="Unique flavour combinations you won’t find anywhere else."
          />
          <FeatureCard2
            title="Vegetarian Options"
            description="Fresh, colourful toppings baked to perfection."
          />
        </Box>
      </Box>
    </Box>
  );
}
