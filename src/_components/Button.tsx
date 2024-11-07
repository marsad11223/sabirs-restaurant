import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { colors, fonts } from "@/app/utils/themes";

interface CustomButtonProps extends ButtonProps {}

const Button: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton
      variant="contained"
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
          "background-color 0.3s ease-in-out, color 0.15s ease-in, box-shadow 0.1s ease-in-out",
        textWrap: "nowrap",
        "&:hover": {
          backgroundColor: colors.black,
          color: colors.secondaryYellow,
          boxShadow: "0px 0px 8px #F63333",
        },
        "&:active": {
          backgroundColor: "#e0e0e0",
        },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
