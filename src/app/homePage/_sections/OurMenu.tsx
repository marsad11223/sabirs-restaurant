"use client";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick"; // Import the Slider component

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
      name: "12inch Garlic Bread",
      discount: "-16%",
      price: "£ 6.29",
      originalPrice: "£ 9.00",
      image: pngs.GarlicBread,
      rating: 5,
    },
    {
      id: 2,
      name: "2Pc Chicken & Fries",
      discount: "-16%",
      price: "£ 2.29",
      originalPrice: "£ 4.89",
      image: pngs.Fries,
      rating: 5,
    },
    {
      id: 3,
      name: "Flamin Fusion Burger",
      discount: "-16%",
      price: "£ 2.29",
      originalPrice: "£ 4.99",
      image: pngs.Burger,
      rating: 5,
    },
    {
      id: 4,
      name: "Quarter Peri Peri...",
      discount: "-16%",
      price: "£ 3.29",
      originalPrice: "£ 4.29",
      image: pngs.LegPiece,
      rating: 5,
    },
    {
      id: 5,
      name: "Daal",
      discount: "-16%",
      price: "£ 6.29",
      originalPrice: "£ 8.95",
      image: pngs.Daal,
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900, // Below 768px screen width
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        maxHeight: { xl: "1600px" },
        height: "100%",
        overflowY: "scroll",
        marginTop: "-3px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      {/* bg image  */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={pngs.BGourMenu}
          alt="BGsabirsGrill"
        />
      </Box>
      {/* slider box  */}
      <Box
        sx={{
          padding: {
            xs: "40px 16px",
            sm: "40px 32px",
            md: "80px 64px",
            lg: "100px 80px 200px 80px",
          },
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
                OUR MENU
              </Typography>
            </Box>

            {/* Add the slider with menu items */}
            <Slider {...sliderSettings}>
              {menuItems.map((item) => (
                <MenuCard key={item.id} data={item} />
              ))}
            </Slider>
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
      {/* section NEW PRODUCTS  */}
      <Box></Box>
    </Box>
  );
}

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
            width: { xs: "250px", sm: "288px" },
            height: { xs: "auto", sm: "263px" },
            maxWidth: { xs: "270px", sm: "300px" },
            backgroundColor: "#ff9800",
            borderRadius: "30px",
            position: "relative",
          }}
        >
          {/* Side icon */}
          <Box
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
          </Box>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={props.data.image}
            alt={props.data.name}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "12px",
            marginTop: { xs: "20px", sm: "28px" },
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
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            {/* Render stars based on rating */}
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// export
