import React from "react";

const MapComponent: React.FC<{}> = () => {
  return (
    <iframe
      loading="lazy"
      src="https://maps.google.com/maps?q=Sabirs%2C%20Westgate%2C%20Rotherham%2C%20UK&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
      title="Sabirs, Westgate, Rotherham, UK"
      aria-label="Sabirs, Westgate, Rotherham, UK"
      style={{ width: "100%", height: "100%" }} // Ensure iframe takes full Box dimensions
    ></iframe>
  );
};

export default MapComponent;
