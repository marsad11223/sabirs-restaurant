import React from "react";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { SxProps, Theme } from "@mui/material/styles";
import svgs from "@/_assets/svgs";

interface ArrowProps {
  onClick?: () => void;
  sx?: SxProps<Theme>;
  image: StaticImageData | string;
  alt?: string;
}

const SliderArrow: React.FC<ArrowProps> = ({
  onClick,
  sx,
  image,
  alt = "Slider Arrow",
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        zIndex: 1,
        cursor: "pointer",
        width: {
          xs: "40px",
          md: "50px",
          lg: "60px",
        },
        height: {
          xs: "40px",
          md: "50px",
          lg: "60px",
        },
        opacity: 0.4,
        transition: "all 0.4s ease-in-out",
        "&:hover": {
          opacity: 1,
        },
        ...sx,
      }}
    >
      <Image
        src={image}
        alt={alt}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default SliderArrow;
