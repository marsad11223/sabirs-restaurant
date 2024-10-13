"use client";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick"; // Import the Slider component
// import NewDishes from "./NewDishes";

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
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
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
      <NewProducts />
      {/* section NEW PRODUCTS  */}
      {/* <Box> */}

      {/* </Box> */}
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

export function NewProducts() {
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
    <>
      <Box
        sx={{
          padding: {
            xs: "0px 0 60px 0 ",
            sm: "100px 0 100px 0 ",
            lg: "200px 0 200px 0 ",
          },
          position: "relative",
          zIndex: "10",
        }}
      >
        {/* heading */}
        <Box
          sx={{
            textAlign: "center",
            padding: "100px 0 ",
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
            NEW PRODUCTS
          </Typography>
          {/* heading box */}
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
        {/* card */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "20px", sm: "40px", md: "60px" },
            position: "relative",
            maxWidth: { xs: "100%", sm: "500px", md: "700px", lg: "1000px" },
            margin: { xs: "0 20px", sm: "0" },
            padding: {
              xs: "30px 50px 30px 20px",
              sm: "50px 70px 50px 30px",
              md: "50px 70px 50px 30px",
              lg: "100px 200px 100px 90px",
            },
            marginTop: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
            backgroundColor: "#ffffff",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              maxWidth: { xs: "143px", sn: "220px", md: "250px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Oswald",
                fontWeight: 400,
                fontSize: "11px",
                color: "#851A1D",
                lineHeight: "16px",
              }}
            >
              WEEKEND DEALS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Oswald",
                fontWeight: 700,
                fontSize: { xs: "18px", sm: "24px", md: "36px" },
                color: "#851A1D",
                lineHeight: "38.54px",
                padding: { xs: "0", sm: "15px 0 10px 0", md: "20px 0 15px 0" },
              }}
            >
              Fresh Coconut
            </Typography>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                color: "#00000080",
                lineHeight: "23.12px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed dui tempor eros porttitor.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Oswald",
                fontWeight: 700,
                fontSize: { xs: "15px", sm: "20px", md: "24px" },
                lineHeight: "23.12px",
                textAlign: "left",
                color: "#851A1D",
                padding: {
                  xs: "0 0 15px 0",
                  sm: "18px 0 15px 0",
                  md: "20px 0 15px 0",
                },
              }}
            >
              £10.00
            </Typography>
            {/* Add buttons here */}
            <OrderButton />
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "250px", lg: "350px" },
              minWidth: { xs: "100px", sm: "0" },
              width: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              src={pngs.ItalianPasta}
              alt="Delicious Italian Pasta"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function OrderButton() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: { xs: "100%", sm: "auto" },
          borderRadius: "50px",
          backgroundColor: "transparent",
          color: "#A52A2A", // Dark red text
          fontWeight: "bold",
          padding: { xs: "10px 32px 10px 10px", md: "10px 50px 10px 20px" },
          border: "2px solid #A52A2A", // Border color dark red
          textTransform: "uppercase", // Make text uppercase
          position: "relative",
          overflow: "hidden",
          ":hover": {
            backgroundColor: "rgba(128,0,0,0.7)",
            color: "#ffffff",
          },
        }}
        endIcon={
          <Box
            sx={{
              backgroundColor: "#A52A2A",
              borderRadius: "50%",
              width: { xs: "25px", sm: "30", md: "38px" },
              height: { xs: "25px", sm: "30", md: "38px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "5px",
            }}
          >
            <Image
              style={{ width: "12px", height: "auto" }}
              src={svgs.ArrowWhite}
              alt="white arrow"
            />
          </Box>
        }
      >
        Order Now
      </Button>
    </>
  );
}
