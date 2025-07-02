"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fonts, colors } from "@/app/utils/themes";
import Button from "@/_components/Button";
import NextMealSlider from "./NextMealSlider";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";
import AOS from "aos";
import "aos/dist/aos.css";
import webp from "@/_assets/webp";

export default function NextMeal() {
  const router = useRouter();
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };
  2;
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.primaryRed,
        backgroundImage:
          "url(https://res.cloudinary.com/ddixiuh7h/image/upload/v1751361364/sabir%27s/backgroundImages/bgNextMeal_lu5eec.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        padding: {
          xs: "60px 20px",
          md: "100px 60px",
          lg: "100px 150px 100px 100px",
          xl: "100px 150px",
        },
        borderRadius: { xs: "0", sm: "0 0 40px 40px", md: "0 0 80px 80px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: "50px", sm: "80px", lg: "120px", xl: "200px" },
          maxWidth: "1300px",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="1500"
          sx={{ maxWidth: "500px" }}
        >
          <Typography sx={{ ...headingStyles, color: colors.secondaryYellow }}>
            Are you in the mood for
          </Typography>
          <Typography sx={{ ...headingStyles, color: colors.White }}>
            Pizza?
          </Typography>
          <Typography
            sx={{
              color: colors.White,
              fontSize: fonts.secondaryTypography,
              lineHeight: fonts.secondaryTypography,
              marginTop: { xs: "10px", xl: "24px" },
            }}
          >
            We've got meaty pizzas, veggie pizzas, the classics, and our very
            own Sabir's special!
          </Typography>
          <Box sx={{ marginTop: { xs: "20px", xl: "40px" } }}>
            <Button
              styles={{
                "&:hover": {
                  backgroundColor: colors.secondaryYellow,
                },
              }}
              onClick={() => {
                router.push("/order");
              }}
            >
              I Want Pizza
            </Button>
          </Box>
        </Box>
        {/* Slider with cards */}
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          sx={{ position: "relative" }}
        >
          <Box
            sx={{
              height: { xs: "330px", sm: "370px", lg: "450px" },
              width: { xs: "250px", sm: "340px", lg: "410px" },
              backgroundColor: colors.White,
              borderRadius: "30px",
              position: "relative",
              zIndex: "30",
              boxShadow: `-3px 4px 8px ${colors.smokeGray}`,
            }}
          >
            <Slider {...settings}>
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362132/sabir%27s/nextMeal_slider/pizza_1_alfgns.webp`}
                title="Meat Feast Pizza"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362135/sabir%27s/nextMeal_slider/pizza_2_dubil2.webp`}
                title="Sabirs Asian Special Pizza"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362173/sabir%27s/nextMeal_slider/pizza_3_tkmvno.webp`}
                title="Vegetarian Pizza"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362181/sabir%27s/nextMeal_slider/pizza_4_bly7oy.webp`}
                title="Meat Lovers Pizza"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362190/sabir%27s/nextMeal_slider/pizza_5_qug6mo.webp`}
                title="Chicken Tikka Pizza"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362190/sabir%27s/nextMeal_slider/pizza_6_hplt4j.webp`}
                title="Pepperoni Pizza"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362195/sabir%27s/nextMeal_slider/pizza_7_zk4aaj.webp`}
                title="12inch Garlic Bread"
              />
              <NextMealSlider
                image={`https://res.cloudinary.com/ddixiuh7h/image/upload/v1751362200/sabir%27s/nextMeal_slider/pizza_8_x3lhjc.webp`}
                title="Cheese Pizza"
              />
              {/* <NextMealSlider
                image={webp.Pizza9}
                title="Sabirs has arrived in Sheffield"
              />
              <NextMealSlider image={webp.Pizza10} title="Sabir’s Steak" /> */}
            </Slider>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "20",
              height: "100%",
              width: "100%",
              backgroundColor: colors.secondaryYellow,
              boxShadow: `-3px 4px 8px ${colors.smokeGray}`,
              transform: "rotate(-5deg)",
              borderRadius: "30px",
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "10",
              height: "100%",
              width: "100%",
              backgroundColor: colors.White,
              boxShadow: `-3px 4px 8px ${colors.smokeGray}`,
              transform: "rotate(-13deg)",
              borderRadius: "30px",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
