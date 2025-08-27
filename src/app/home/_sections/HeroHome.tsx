"use client";
// import webp from "@/_assets/webp";
import {
  Box,
  // Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
// import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState(true);

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

    const onCanPlayThrough = () => {
      tryPlay();
      setLoading(false);
    };

    const onPlaying = () => {
      setLoading(false);
    };

    const onFirstUserInteraction = async () => {
      await tryPlay();
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };

    v.addEventListener("canplaythrough", onCanPlayThrough);
    v.addEventListener("playing", onPlaying);
    window.addEventListener("touchend", onFirstUserInteraction, { once: true });
    window.addEventListener("click", onFirstUserInteraction, { once: true });

    if (v.readyState >= 3) {
      // already enough data to play
      setLoading(false);
    }

    return () => {
      v.removeEventListener("canplaythrough", onCanPlayThrough);
      v.removeEventListener("playing", onPlaying);
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
          >
            <source
              src={
                isMobile
                  ? "/mobileVideoCompressed.mp4"
                  : "/desktopVideoCompressed.mp4"
              }
              type="video/mp4"
            />
          </video>

          {loading && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35))",
              }}
            >
              <CircularProgress size={48} />
            </Box>
          )}

          {/* Your hero content can sit here; it will be visible when loading=false if you want to fade it */}
          {/* <Box sx={{ position: "relative", zIndex: 1, opacity: loading ? 0 : 1, transition: "opacity 400ms ease" }}>
            <Typography data-aos="fade-left" data-aos-duration="1000" sx={{ ...headingStyles }}>
              taste the world
            </Typography>
            ...
          </Box> */}
        </Box>
      </Box>
    </>
  );
}
