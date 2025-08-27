"use client";
// import webp from "@/_assets/webp";
import {
  Box,
  // Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";

export default function HeroHome() {
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const headingStyles = {
    color: colors.secondaryYellow,
    fontSize: fonts.headingPrimary,
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.setAttribute("autoplay", "");
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("loop", "");
    v.setAttribute("preload", "auto");
    v.muted = true;
    v.playsInline = true;

    const tryPlay = async () => {
      try {
        if (v.paused) await v.play();
      } catch {}
    };

    const onFirstUserInteraction = async () => {
      await tryPlay();
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };

    window.addEventListener("touchend", onFirstUserInteraction, { once: true });
    window.addEventListener("click", onFirstUserInteraction, { once: true });

    if (v.readyState >= 3) {
      tryPlay();
    }

    return () => {
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };
  }, [isMobile]);

  return (
    <>
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
            textAlign: "center",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
            key="hero-bg-video"
          >
            <source
              src="/mobileVideoCompressed.mp4"
              type="video/mp4"
              media="(max-width: 600px)"
            />
            <source
              src="/desktopVideoCompressed.mp4"
              type="video/mp4"
              media="(min-width: 601px)"
            />
          </video>
        </Box>
      </Box>
    </>
  );
}
