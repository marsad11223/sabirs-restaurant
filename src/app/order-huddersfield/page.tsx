"use client";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "@/_components/navbar/Navbar";
import Footer from "@/_components/footer/Footer";

export default function OrderHuddersfield() {
  useEffect(() => {
    // Add the window.onmessage listener for handling iframe messages
    window.onmessage = (event) => {
      // Handle frame height change
      if (event.data.hasOwnProperty("frameHeight")) {
        const iframe = document.getElementById(
          "iframe"
        ) as HTMLIFrameElement | null;
        if (iframe && event.data.frameHeight > 50) {
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
        ) as HTMLIFrameElement | null;

        if (openModal && iframeModal) {
          iframeModal.contentWindow?.postMessage(
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
        const iframe = document.getElementById(
          "iframe"
        ) as HTMLIFrameElement | null;

        if (addItemToCart && iframe) {
          iframe.contentWindow?.postMessage(
            { cartItemNode, addItemToCart: true },
            "*"
          );
        }

        const iframeModal = document.getElementById(
          "iframeModal"
        ) as HTMLIFrameElement | null;
        if (iframeModal) {
          iframeModal.style.height = "0px";
        }
      }
    };

    // Cleanup event listener on unmount
    return () => {
      window.onmessage = null;
    };
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f2f2f2",
        }}
      >
        {/* First iframe */}
        <iframe
          frameBorder="0"
          id="iframe"
          style={{
            height: "1304px",
            width: "100%",
            zIndex: 1000,
            minHeight: "700px",
          }}
          src="https://app.eatpresto.co.uk/location/8979294b-91c7-44c3-8486-ea80625b32f1/shop?embedType=WP"
        ></iframe>

        {/* Second iframe */}
        <iframe
          allowFullScreen
          id="iframeModal"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
          }}
          src="https://app.eatpresto.co.uk/location/8979294b-91c7-44c3-8486-ea80625b32f1/itempopupmodal?embedType=WP"
        ></iframe>
      </Box>
      <Footer />
    </Box>
  );
}
