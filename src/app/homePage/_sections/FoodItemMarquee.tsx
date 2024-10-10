import pngs from "@/_assets/pngs";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

interface FoodCardProps {
  title: string;
  price: string;
  image: StaticImageData;
}

export default function HeroSection() {
  const foodItems: FoodCardProps[] = [
    {
      title: "12inch Garlic Bread ....",
      price: "£7.19",
      image: pngs.GarlicBread,
    },

    {
      title: "2Pc Chicken & Fries",
      price: "£4.89",
      image: pngs.Fries,
    },
    {
      title: "Flamin Fusion Burger",
      price: "£4.99",
      image: pngs.Burger,
    },
    {
      title: " Quarter Peri Peri...",
      price: "£4.29",
      image: pngs.LegPiece,
    },
    {
      title: "Daal",
      price: "£8.95",
      image: pngs.Daal,
    },

    // dublicate
    {
      title: "12inch Garlic Bread ....",
      price: "£7.19",
      image: pngs.GarlicBread,
    },

    {
      title: "2Pc Chicken & Fries",
      price: "£4.89",
      image: pngs.Fries,
    },
    {
      title: "Flamin Fusion Burger",
      price: "£4.99",
      image: pngs.Burger,
    },
    {
      title: " Quarter Peri Peri...",
      price: "£4.29",
      image: pngs.LegPiece,
    },
    {
      title: "Daal",
      price: "£8.95",
      image: pngs.Daal,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: { xs: "40px 0", sm: "80px 0", md: "95px 0" },
          marginTop: { md: "-4px" },
        }}
      >
        <Marquee>
          {foodItems.map((item, index) => (
            <FoodCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </Marquee>
      </Box>
    </>
  );
}

export const FoodCard = ({ title, price, image }: FoodCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: { xs: "150px", sm: "220px", md: "268px" },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: { xs: "145px", sm: "200px", md: "268px" },
          height: "auto",
          maxHeight: "268px",
          paddingBottom: { xs: "8px", sm: "15px", md: "30px" },
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          src={image}
          alt={title}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "11px", sm: "14px", md: "16px" },
          fontWeight: "700",
          color: "#000000",
        }}
      >
        {title}
      </Typography>

      {/* Price */}
      <Typography
        sx={{
          fontSize: { xs: "11px", sm: "14px", md: "16px" },
          fontWeight: "700",
          color: "#000000",
        }}
      >
        {price}
      </Typography>
    </Box>
  );
};
