"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ShowcaseCardProps {
  image: StaticImageData;
  title: string;
  title2?: string;
  price?: string;
  description?: string;
  onClick?: () => void;
}

export default function ShowcaseCard({
  image,
  title,
  title2,
  price,
  description,
  onClick,
}: ShowcaseCardProps) {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="400"
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: { xs: "450px", lg: "unset" },
        margin: { xs: "auto", lg: "unset" },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          aspectRatio: "139 / 125",
        }}
      >
        <Image
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          padding: "20px 10px",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "10px", md: "12px" },
          flexGrow: 1,
          backgroundColor: "#fff",
        }}
      >
        {/* Title and Price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              color: colors.secondaryYellow,
              fontSize: fonts.h6,
              lineHeight: fonts.h6,
              fontFamily: '"Bebas Neue", sans-serif !important',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                // elipsis there
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <br />
            <Typography
              component="span"
              sx={{
                color: colors.primaryRed,
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                // elipsis there
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title2}
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: fonts.h6,
              color: colors.secondaryYellow,
              fontFamily: '"Bebas Neue", sans-serif',
              whiteSpace: "nowrap",
            }}
          >
            {price}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontSize: fonts.p5,
            color: "#00000080",
            lineHeight: "1.5",
            flexGrow: 1,
            // elipsis there
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>

        {/* Button */}
        <Box
          component="button"
          onClick={onClick}
          sx={{
            backgroundColor: "#851A1D",
            color: colors.White,
            border: "none",
            borderRadius: "8px",
            padding: {
              xs: "15px 30px",
              md: "20px 40px",
            },
            fontSize: fonts.p5,
            fontWeight: "600",
            fontFamily: "inherit",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "none",
            marginTop: "auto",
            "&:hover": {
              backgroundColor: "#A01F23",
              transform: "translateY(-2px)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          Go To Order
        </Box>
      </Box>
    </Box>
  );
}
