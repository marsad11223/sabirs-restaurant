"use client";
import Button from "@/_components/Button";
import { colors, fonts } from "@/app/utils/themes";
import { Box, CircularProgress, Typography } from "@mui/material";
import CustomizedSwitches from "../_components/IOSSwitch";
import InputFeedback from "@/_components/FeedbackInput";
import svgs from "@/_assets/svgs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function SectionFeedback() {
  const [rating, setRating] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (isAnonymous) {
      clearErrors(["name", "email"]);
    }
  }, [isAnonymous]);

  const onSubmit = async (data: ContactFormInputs) => {
    const payload = {
      ...data,
      name: isAnonymous ? "Anonymous" : data.name,
      email: isAnonymous ? "Anonymous" : data.email,
      rating,
    };

    try {
      setLoading(true);
      const response = await axios.post("/api/feedback", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        toast.success("Feedback submitted successfully!");
        reset();
        setRating(0);
      } else {
        toast.error("Submission failed! Please try again.");
      }
    } catch (err) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    textAlign: { xs: "center", md: "left" },
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(worldMap.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        height: { xs: "772px", sm: "931px", md: "937px", xl: "960px" },
        display: "flex",
      }}
    >
      <Box
        sx={{
          padding: { xs: "40px 20px", sm: "50px 80px", md: "100px 80px" },
          margin: "auto",
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", md: "80px" },
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "430px", width: "100%" }}>
          <Typography sx={{ ...headingStyles, color: "#FFD40D" }}>
            submit your
          </Typography>
          <Typography sx={{ ...headingStyles, color: "#851A1D" }}>
            powerful feedback
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "100%",
            maxWidth: "640px",
            bgcolor: "#fff",
            borderRadius: { xs: "13px", sm: "24px" },
            p: { xs: "28px", sm: "48px" },
            overflow: "hidden",
          }}
        >
          <CustomizedSwitches
            checked={isAnonymous}
            onChange={() => setIsAnonymous((prev) => !prev)}
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: { xs: "16px", md: "24px" },
              flexDirection: "column",
              mt: "30px",
              maxHeight: isAnonymous ? 0 : "300px",
              opacity: isAnonymous ? 0 : 1,
              transform: isAnonymous ? "translateY(-10px)" : "translateY(0)",
              transition: "all 0.6s ease-in-out",
              pointerEvents: isAnonymous ? "none" : "auto",
            }}
          >
            <Controller
              name="name"
              control={control}
              rules={{
                required: !isAnonymous ? "Name is required" : false,
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              }}
              render={({ field }) => (
                <InputFeedback
                  {...field}
                  inputType="text"
                  placeholder="John Carter"
                  label="Name"
                  icon={svgs.User}
                  sx={{ width: "100%" }}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: !isAnonymous ? "Email is required" : false,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <InputFeedback
                  {...field}
                  inputType="email"
                  placeholder="Email address"
                  label="Email"
                  icon={svgs.emailfeed}
                  sx={{ width: "100%" }}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>

          <Box sx={{ width: "100%", mt: "30px" }}>
            <Typography
              sx={{
                fontSize: fonts.tertiaryTypography,
                fontWeight: 600,
                color: "#851A1D",
                mb: { xs: "10px", sm: "20px" },
              }}
            >
              Your Rating
            </Typography>
            <Box sx={{ display: "flex", gap: { xs: "6px", sm: "12px" } }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <Image
                  key={index}
                  src={index < rating ? svgs.ratingStars : svgs.ratingGrayStars}
                  alt="star"
                  style={{ width: "21px", height: "24px", cursor: "pointer" }}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ width: "100%", mt: "30px" }}>
            <Controller
              name="message"
              control={control}
              rules={{
                required: "Feedback message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              }}
              render={({ field }) => (
                <InputFeedback
                  {...field}
                  inputType="message"
                  placeholder="If you have more to add, please type it here..."
                  label="Your Feedback"
                  isbool={true}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={{
                    width: "100%",
                    border: "1px solid #851A1D",
                    mt: { xs: "10px", sm: "20px" },
                    borderRadius: "12px",
                    padding: { xs: "14px", sm: "24px" },
                    backgroundColor: "#fff",
                    "& .MuiInputBase-root": { padding: 0 },
                    "& .MuiInput-underline:before": { border: "none" },
                    "& .MuiInput-underline:after": { border: "none" },
                    "& .MuiInput-underline.Mui-focused:after": {
                      borderBottomColor: colors.primaryRed,
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottom: "none",
                    },
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ paddingTop: { xs: "27px", sm: "30px" } }}>
            <Button
              type="submit"
              disabled={loading}
              styles={{
                color: "#fff",
                padding: { xs: "10px 21px", sm: "16px 32px" },
                backgroundColor: "#851A1D",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: { xs: "153px", sm: "192px" },
                height: { xs: "34px", sm: "60px" },
                fontWeight: 700,
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: colors.White }} />
              ) : (
                "Send Feedback"
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
