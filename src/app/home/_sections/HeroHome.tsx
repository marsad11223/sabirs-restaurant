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

    let playedOnce = false;

    const tryPlay = async () => {
      try {
        if (v.paused) await v.play();
      } catch {}
    };

    const onLoadedMetadata = () => tryPlay();
    const onCanPlay = () => tryPlay();
    const onPlaying = () => {
      playedOnce = true;
      setLoading(false);
    };
    const onTimeUpdate = () => {
      if (!playedOnce && v.currentTime > 0.05) {
        playedOnce = true;
        setLoading(false);
      }
    };
    const onStalled = () => setLoading(true);
    const onWaiting = () => setLoading(true);
    const onError = () => setLoading(true);

    v.addEventListener("loadedmetadata", onLoadedMetadata);
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("playing", onPlaying);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("stalled", onStalled);
    v.addEventListener("waiting", onWaiting);
    v.addEventListener("error", onError);

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      setLoading(true);
    }

    const onFirstUserInteraction = async () => {
      await tryPlay();
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };
    window.addEventListener("touchend", onFirstUserInteraction, { once: true });
    window.addEventListener("click", onFirstUserInteraction, { once: true });

    return () => {
      v.removeEventListener("loadedmetadata", onLoadedMetadata);
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("stalled", onStalled);
      v.removeEventListener("waiting", onWaiting);
      v.removeEventListener("error", onError);
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
