"use client";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import webp from "@/_assets/webp";
import Slider from "react-slick";
import SabirsGrillWelcome from "./SabirsGrillWelcome";
import NewDishes from "./NewDishes";

import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import NewProducts from "./NewProducts";

interface MenuItem {
  id: number;
  name: string;
  discount: string;
  price: string;
  originalPrice: string;
  image: StaticImageData;
  rating: number;
}

export default function OurMenu() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Garlic Bread",
      discount: "-16%",
      price: "£ 6.29",
      originalPrice: "£ 9.00",
      image: webp.GarlicBread,
      rating: 5,
    },
    {
      id: 2,
      name: "Chicken & Fries",
      discount: "-16%",
      price: "£ 2.29",
      originalPrice: "£ 4.89",
      image: webp.Fries,
      rating: 5,
    },
    {
      id: 3,
      name: "Fusion Burger",
      discount: "-16%",
      price: "£ 2.29",
      originalPrice: "£ 4.99",
      image: webp.Burger,
      rating: 5,
    },
    {
      id: 4,
      name: "Peri Peri",
      discount: "-16%",
      price: "£ 3.29",
      originalPrice: "£ 4.29",
      image: webp.LegPiece,
      rating: 5,
    },
    {
      id: 5,
      name: "Daal",
      discount: "-16%",
      price: "£ 6.29",
      originalPrice: "£ 8.95",
      image: webp.Daal,
      rating: 5,
    },
  ];

  const CustomLeftArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "40%",
          left: { lg: "-80px", md: "-70px", sm: "-50px", xs: "-15px" },
          transform: "translateY(-50%)",
          width: { lg: "auto", sm: "50px", xs: "50px" },
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <Image
          src={svgs.LeftAero}
          alt="Left Arrow"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    );
  };

  const CustomRightArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "40%",
          right: { lg: "-80px", md: "-70px", sm: "-50px", xs: "-15px" },
          width: { lg: "auto", sm: "50px", xs: "50px" },
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <Image
          src={svgs.RightAero}
          alt="Right Arrow"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
      id="ourmenu"
      sx={{
        position: "relative",
        // minHeight: "100vh",
        backgroundImage: "url(/bgOurMenuBlur.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "40px 0px",
            sm: "40px 0px",
            md: "80px 0px",
            lg: "100px 0px 0px 0px",
          },
          m: "0 auto",
          position: "relative",
        }}
      >
        {/* heddingBox  */}
        <Box
          sx={{
            textAlign: "center",
            padding: { xs: "40px 0", sm: "85px 0", lg: "100px 0" },
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
            OUR MENU
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
        <Box
          sx={{
            position: "relative",
            zIndex: "10",
            maxWidth: "1400px",
            margin: {
              xs: "0 20px",
              sm: "0 50px",
              md: "0 80px",
              // lg: "0 80px",
              xl: "0 auto",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "48px",
              padding: {
                xs: "40px 20px",
                sm: "90px 60px",
                md: "100px 70px",
                lg: "130px 70px",
                xl: "130px 70px",
              },
              position: "relative",
              zIndex: "10",
            }}
          >
            {/* Add the slider with menu items */}
            <Box sx={{ maxWidth: { lg: "1100px", md: "700px" }, m: "0 auto" }}>
              <Slider {...sliderSettings}>
                {menuItems.map((item) => (
                  <MenuCard key={item.id} data={item} />
                ))}
              </Slider>
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
        <NewProducts />
        <SabirsGrillWelcome />
        <NewDishes />
      </Box>
    </Box>
  );
}

// slider card
export function MenuCard(props: { data: MenuItem }) {
  const itemName = {
    color: "#851A1D",
    fontWeight: "600",
    fontFamily: "Raleway",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        {/* Card image */}
        <Box
          sx={{
            width: { xs: "200px", sm: "320px" },
            height: { xs: "auto", sm: "263px" },
            maxWidth: { xs: "270px", sm: "300px" },
            backgroundColor: "#ff9800",
            borderRadius: "30px",
            position: "relative",
          }}
        >
          {/* Side icon */}
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              backgroundColor: "#851A1D",
              borderRadius: "29px",
              padding: "5px 10px",
              position: "absolute",
              top: "15px",
              left: "16px",
            }}
          >
            <Image
              style={{ height: "17px", width: "17px" }}
              src={svgs.DiscountIcon}
              alt="DiscountIcon"
            />
            <Typography
              sx={{ color: "#ffffff", fontSize: "13.5px", fontWeight: "600" }}
            >
              {props.data.discount}
            </Typography>
          </Box> */}
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={props.data.image}
            alt={props.data.name}
          />
        </Box>
        {/* card Typography  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "12px",
            marginTop: { xs: "20px", sm: "28px" },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              ...itemName,
              fontSize: { xs: "12px", sm: "15px", md: "17px" },
            }}
          >
            {props.data.name}
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            {Array(props.data.rating)
              .fill(0)
              .map((_, index) => (
                <Image
                  key={index}
                  style={{
                    height: "19px",
                    width: "19px",
                    objectFit: "contain",
                  }}
                  src={svgs.Star}
                  alt="Star"
                />
              ))}
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              sx={{ ...itemName, fontSize: { xs: "12px", sm: "15px" } }}
            >
              {props.data.price}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: "400",
                fontSize: { xs: "12px", sm: "15px" },
                color: "#D9D9D9",
                textDecoration: "line-through",
              }}
            >
              {props.data.originalPrice}
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
