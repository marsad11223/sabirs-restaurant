import React from "react";
import { TextField } from "@mui/material";

interface StandardInputProps {
  inputType?: string;
  placeholder?: string;
}

const StandardInput: React.FC<StandardInputProps> = ({
  inputType = "text", // Default input type
  placeholder = "Enter text", // Default placeholder
}) => {
  return (
    <TextField
      label={placeholder}
      variant="standard"
      fullWidth
      type={inputType}
      sx={{
        width: "100%",
        color: "#00000033",
        "& .MuiInputBase-root": {
          color: "#00000033",
        },
        "& .MuiInput-underline:before": {
          borderBottom: "1px solid #00000033",
        },
        "& .MuiInput-underline:after": {
          borderBottom: "2px solid #851A1D",
        },
        "& .MuiInputLabel-root": {
          color: "rgba(0, 0, 0, 0.3)",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#851A1D",
        },
        "& .MuiInputBase-root.Mui-focused": {
          color: "#851A1D",
        },
        "& .MuiInput-underline.Mui-focused:after": {
          borderBottomColor: "#851A1D",
        },
      }}
    />
  );
};

export default StandardInput;
