"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";
import svgs from "@/_assets/svgs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function HeroHome() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    color: colors.secondaryYellow,
    fontSize: {
      xs: "52px",
      sm: "60px",
      md: "72px",
      lg: "96px",
    },
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  const targetDate = dayjs.tz("2025-02-14 17:00:00", "Europe/London");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = dayjs().tz("Europe/London");
    const diff = targetDate.diff(now, "second");

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (60 * 60 * 24)),
      hours: Math.floor((diff % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((diff % (60 * 60)) / 60),
      seconds: diff % 60,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexShrink: 0 }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(./bgHeroHome.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: {
            xs: "20px",
            sm: "20px 30px",
            md: "20px 80px",
            lg: "20px 80px",
            xl: "25px 120px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1600px", margin: "auto", width: "100%" }}>
          <Box>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1000"
              sx={{ ...headingStyles }}
            >
              Sabir&rsquo;s is Coming
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1000"
              sx={{ ...headingStyles, color: "#ffffff" }}
            >
              to Sheffield!
            </Typography>
          </Box>

          {/* Countdown Timer */}
          <Box
            display="flex"
            alignItems="center"
            sx={{
              fontFamily: "monospace",
              paddingTop: { xs: "20px", sm: "30px", md: "50px" },
              gap: { xs: "5px", sm: "8px", md: "15px" },
            }}
          >
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <Box
                key={unit}
                sx={{
                  textAlign: "center",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  ...(unit === "seconds" && {
                    display: { xs: "none", sm: "flex" }, // Hide seconds on mobile
                  }),
                }}
              >
                {String(timeLeft[unit as keyof typeof timeLeft])
                  .padStart(2, "0")
                  .split("")
                  .map((digit, i) => (
                    <Box
                      key={`${unit}-${i}`}
                      sx={{
                        background: "#fff",
                        padding: {
                          xs: "8px 5px",
                          sm: "10px 10px",
                          md: "10px 15px",
                        },
                        borderRadius: "8px",
                        fontWeight: "bold",
                        color: "#900",
                        margin: "0 3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: { md: "50px" },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ fontFamily: "Digital Numbers, monospace" }}
                      >
                        {digit}
                      </Typography>
                    </Box>
                  ))}
                {index < 3 && unit !== "seconds" && (
                  <Typography
                    sx={{
                      display: { xs: "none", sm: "block" },
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "#fff",
                      padding: "0 10px",
                    }}
                  >
                    :
                  </Typography>
                )}
                <Typography
                  sx={{
                    fontSize: fonts.primaryTypography,
                    textTransform: "uppercase",
                    marginTop: "5px",
                    color: colors.White,
                    fontFamily: "Bebas Neue, sans-serif",
                    width: "100%",
                    position: "absolute",
                    bottom: "-40px",
                    left: "0px",
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            ))}
          </Box>
          {/* Location */}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              paddingTop: { xs: "100px", md: "150px" },
            }}
          >
            <Image
              style={{ width: "18px" }}
              src={svgs.LocationYellowIcon}
              alt="location"
            />
            <Typography
              sx={{
                color: colors.White,
                fontSize: fonts.primaryTypography,
                textDecoration: "underline",
              }}
            >
              224-230 London Rd, Highfield, Sheffield S2 4LW, UK
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
