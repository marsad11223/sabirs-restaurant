import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { colors, fonts } from "@/app/utils/themes";

interface CustomButtonProps {
  children: React.ReactNode;
  styles?: ButtonProps["sx"];
  type?: "button" | "submit" | "reset"; // Add the `type` prop for form compatibility
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  styles = {},
  type = "button", // Default type is "button"
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <MuiButton
      variant="contained"
      type={type} // Pass the type prop to the underlying Material-UI Button
      disabled={disabled}
      onClick={onClick}
      sx={{
        fontSize: fonts.tertiaryTypography,
        fontWeight: "400",
        color: colors.primaryRed,
        backgroundColor: colors.White,
        borderRadius: "4px",
        textTransform: "capitalize",
        padding: {
          xs: "10px 15px",
          sm: "10px 15px",
          lg: "15px 25px",
        },
        transition:
          "background-color 0.6s ease-in-out, color 0.3s ease-in, box-shadow 0.1s ease-in-out",
        textWrap: "nowrap",
        "&:hover": {
          backgroundColor: colors.primaryRed,
          color: colors.White,
          boxShadow: `0px 0px 15px ${colors.smokeGray}`,
        },
        "&:active": {
          backgroundColor: "#e0e0e0",
        },
        ...styles,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
