import React from "react";
import {
  TextField,
  InputAdornment,
  InputLabel,
  Box,
  SxProps,
  Theme,
} from "@mui/material";
import { colors, fonts } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";

interface StandardInputProps {
  inputType?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  icon?: string | StaticImageData;
  placeholder?: string;
  sx?: SxProps<Theme>;
  isbool?: boolean;
  // FormHelperTextProps?: SxProps<Theme>;
}

const InputFeedback: React.FC<StandardInputProps> = ({
  inputType = "text",
  label = "Name",
  value,
  onChange,
  onBlur,
  error = false,
  helperText = "",
  icon,
  placeholder,
  sx,
  isbool = false,
  // FormHelperTextProps,
}) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <InputLabel
          sx={{
            width: "100%",
            color: "#851A1D",
            fontSize: fonts.tertiaryTypography,
            fontWeight: 600,
          }}
        >
          {label}
        </InputLabel>
        <TextField
          variant="standard"
          // FormHelperTextProps={FormHelperTextProps}
          placeholder={placeholder}
          fullWidth
          multiline={inputType === "message"}
          rows={inputType === "message" ? 4 : undefined}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{
                  width: "20px",
                  height: "20px",
                  display: isbool ? "none" : "block",
                }}
                position="end"
              >
                <Image
                  src={icon as StaticImageData}
                  // src={svgs.Email}
                  alt="feedbackicon"
                  style={{ width: "20px", height: "20px" }}
                />
              </InputAdornment>
            ),
            style: {
              color: "#41414380", // Grey text like in the image
            },
          }}
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              padding: { xs: "4px 9px", sm: "8px 16px" },
              color: "#41414380", // Placeholder text color
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: fonts.tertiaryTypography,
              color: "#41414380",
            },
            "& .MuiInputLabel-root": {
              color: colors.primaryRed,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: colors.primaryRed,
            },
            "& .MuiInputBase-root.Mui-focused": {
              color: colors.primaryRed,
            },
            "& .MuiInput-underline:before": {
              borderBottom: `1px solid ${colors.primaryRed}`,
            },
            "& .MuiInput-underline:after": {
              borderBottom: `2px solid ${colors.primaryRed}`,
            },
            "& .MuiInput-underline.Mui-focused:after": {
              borderBottomColor: colors.primaryRed,
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: `1px solid ${colors.primaryRed}`,
            },
            ...sx,
          }}
        />
      </Box>
    </>
  );
};

export default InputFeedback;
