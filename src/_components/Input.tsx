import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { colors } from "@/app/utils/themes";

interface StandardInputProps {
  inputType?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  startAdornment?: string; // For prepending country code
}

const StandardInput: React.FC<StandardInputProps> = ({
  inputType = "text",
  label = "Enter text",
  value,
  onChange,
  onBlur,
  error = false,
  helperText = "",
  startAdornment,
}) => {
  return (
    <TextField
      label={label}
      variant="standard"
      fullWidth
      type={inputType}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
      }}
      sx={{
        width: "100%",
        "& .MuiInputBase-root": {
          color: colors.primaryRed,
        },
        "& .MuiInput-underline:before": {
          borderBottom: `1px solid ${colors.primaryRed}`,
        },
        "& .MuiInput-underline:after": {
          borderBottom: `2px solid ${colors.primaryRed}`,
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
        "& .MuiInput-underline.Mui-focused:after": {
          borderBottomColor: colors.primaryRed,
        },
      }}
    />
  );
};

export default StandardInput;
