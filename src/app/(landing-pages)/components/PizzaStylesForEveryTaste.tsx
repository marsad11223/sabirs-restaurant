"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors, sectionPadding } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HighlightCard from "./HighlightCard";

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
            maxWidth: "480px",
          }}
        >
          <Typography
            sx={{
              fontSize: fonts.headingSecondary,
              lineHeight: fonts.headingSecondary,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              textTransform: "uppercase",
              textAlign: { xs: "center", sm: "left !important" },
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
              textAlign: { xs: "center", sm: "left !important" },
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
              textAlign: { xs: "center", sm: "left !important" },
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
          <HighlightCard
            title="Classic Pizzas"
            description="Timeless favourites made with rich sauce and melted cheese."
          />
          <HighlightCard
            title="Meaty Pizzas"
            description="Hearty, filling pizzas stacked with flavour and generous toppings."
          />
          <HighlightCard
            title="Signature Specials"
            description="Unique flavour combinations you won’t find anywhere else."
          />
          <HighlightCard
            title="Vegetarian Options"
            description="Fresh, colourful toppings baked to perfection."
          />
        </Box>
      </Box>
    </Box>
  );
}
