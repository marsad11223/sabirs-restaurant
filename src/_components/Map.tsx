import React from "react";

const MapComponent: React.FC<{
  src: string;
  title: string;
  ariaLabel: string;
}> = ({ src, title, ariaLabel }) => {
  return (
    <iframe
      loading="lazy"
      src={src}
      title={title}
      aria-label={ariaLabel}
      style={{ width: "100%", height: "100%" }} // Ensure iframe takes full Box dimensions
    ></iframe>
  );
};

export default MapComponent;

// deploy
