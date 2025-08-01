import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Switch,
  SwitchProps,
  FormGroup,
  FormControlLabel,
  SxProps,
  Theme,
} from "@mui/material";
import { fonts } from "@/app/utils/themes";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  textAlign: "center",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#851A1D",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#851A1D",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      // colors: "#33cf4d",
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,

      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    // backgroundColor: "#00C853",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

type CustomizedSwitchesProps = {
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

export default function CustomizedSwitches({
  label = "Send Anonymously",
  checked,
  onChange,
  sx,
}: CustomizedSwitchesProps) {
  return (
    <FormGroup sx={{ textAlign: "center" }}>
      <FormControlLabel
        control={
          <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={onChange} />
        }
        label={label}
        sx={{
          color: "#41414380",
          textAlign: "center",
          margin: 0,
          fontSize: fonts.tertiaryTypography,
          gap: "20px",
          ...sx,
        }}
      />
    </FormGroup>
  );
}
