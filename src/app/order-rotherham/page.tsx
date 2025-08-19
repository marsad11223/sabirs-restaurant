"use client";

import { useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

export default function OrderHuddersfield() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle frame height change
      if (event.data.hasOwnProperty("frameHeight")) {
        const iframe = document.getElementById("iframe") as HTMLIFrameElement;
        if (event.data.frameHeight > 50 && iframe) {
          iframe.style.height = `${event.data.frameHeight}px`;
        }
      }

      // Open modal for WP embedded
      if (event.data.hasOwnProperty("openModal")) {
        const {
          menuItemData,
          selectedDeliveryMethod,
          selectedDateTime,
          catMenuId,
          openModal,
        } = event.data;
        const iframeModal = document.getElementById(
          "iframeModal"
        ) as HTMLIFrameElement;
        if (openModal && iframeModal?.contentWindow) {
          iframeModal.contentWindow.postMessage(
            {
              selectedDeliveryMethod,
              selectedDateTime,
              menuItemData,
              catMenuId,
              openModal,
            },
            "*"
          );
        }
        if (iframeModal) {
          iframeModal.style.height = openModal ? "100%" : "0px";
        }
      }

      // Handle modal on add to cart
      if (event.data.hasOwnProperty("addItemToCart")) {
        const { addItemToCart, cartItemNode } = event.data;
        const iframe = document.getElementById("iframe") as HTMLIFrameElement;
        if (addItemToCart && iframe?.contentWindow) {
          iframe.contentWindow.postMessage(
            { cartItemNode, addItemToCart: true },
            "*"
          );
        }
        const iframeModal = document.getElementById(
          "iframeModal"
        ) as HTMLIFrameElement;
        if (iframeModal) {
          iframeModal.style.height = "0px";
        }
      }
    };

    // Add event listener
    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          m: "0 auto",
        }}
      >
        <iframe
          frameBorder="0"
          allowFullScreen
          id="iframeModal"
          style={{
            height: "0",
            width: "100%",
            position: "fixed",
            left: 0,
            top: 0,
            overflow: "auto",
            zIndex: 1100,
          }}
          src="https://app.eatpresto.co.uk/location/e1dbf084-d707-48e2-817b-88db61518f4b/itempopupmodal?embedType=WP"
        ></iframe>
        <iframe
          frameBorder="0"
          id="iframe"
          style={{
            height: "100%",
            width: "100%",
            minHeight: "700px",
            position: "relative",
          }}
          src="https://app.eatpresto.co.uk/location/e1dbf084-d707-48e2-817b-88db61518f4b/shop?embedType=WP"
        ></iframe>
      </Box>
      <Footer />
    </Box>
  );
}
