"use client";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import StandardInput from "../../../_components/Input";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { colors, fonts } from "@/app/utils/themes";
import Button from "@/_components/Button";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { showError, showSuccess } from "@/app/utils/toast";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function SectionContactUs() {
  const [loading, setLoading] = useState(false);

  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  // React Hook Form
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/contactus", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);

      if (response?.status === 200) {
        showSuccess("Email sent successfully!");
        reset();
      } else {
        showError(`Failed to send email: ${response?.data?.error}`);
        reset();
      }
    } catch (error) {
      console.error(error, "error");
      showError(`Failed to send email`);
      reset();
    }
  };

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          padding: { xs: "40px 20px", sm: "50px 80px", md: "100px 80px" },
          backgroundImage: "url(worldMap.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <Typography
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.primaryRed,
          }}
        >
          Reach Out for
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          Flavorful Experiences
        </Typography>

        <Box
          sx={{
            paddingTop: { xs: "40px", sm: "50px", md: "100px" },
            position: "relative",
          }}
        >
          {/* form && contact card */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              gap: { xs: "50px", md: "60px", lg: "100px" },
            }}
          >
            <Box
              data-aos="fade-up-right"
              data-aos-duration="1000"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: { xs: "100%", lg: "625px" },
                minWidth: { lg: "526px" },
                gap: {
                  xs: "30px",
                  sm: "50px",
                  md: "60px",
                  lg: "80px",
                  xl: "100px",
                },
              }}
            >
              {/* typography  */}
              <Typography
                sx={{
                  color: colors.primaryRed,
                  fontSize: "16px",
                  fontWeight: "400",
                  textAlign: "left",
                  maxWidth: "500px",
                }}
              >
                We’re here to make your experience unforgettable. Whether you
                have a question, want to make a reservation, or just want to say
                hi, drop us a line! Our team is ready to serve you.
              </Typography>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: "30px",
                      paddingBottom: { xs: "30px", sm: "50px" },
                    }}
                  >
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <StandardInput
                          {...field}
                          inputType="text"
                          label="Name"
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      }}
                      render={({ field }) => (
                        <StandardInput
                          {...field}
                          inputType="email"
                          label="Email"
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: "30px",
                      paddingBottom: { xs: "30px", sm: "50px" },
                    }}
                  >
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue="+44" // Default value for the input
                      rules={{
                        required: "Phone number is required",
                        pattern: {
                          value: /^\+(\d{1,3})(\d{7,15})$/,
                          message:
                            "Phone number must include a valid country code and phone number (e.g., +441234567890)",
                        },
                      }}
                      render={({ field }) => (
                        <StandardInput
                          {...field}
                          inputType="number"
                          label="Phone"
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                        />
                      )}
                    />

                    <Controller
                      name="subject"
                      control={control}
                      rules={{ required: "Subject is required" }}
                      render={({ field }) => (
                        <StandardInput
                          {...field}
                          inputType="text"
                          label="Subject"
                          error={!!errors.subject}
                          helperText={errors.subject?.message}
                        />
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="message"
                      control={control}
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <StandardInput
                          {...field}
                          inputType="text"
                          label="Message"
                          error={!!errors.message}
                          helperText={errors.message?.message}
                        />
                      )}
                    />
                  </Box>
                </Box>
                <Box sx={{ paddingTop: { xs: "50px", sm: "80px" } }}>
                  <Button
                    type="submit"
                    disabled={loading}
                    styles={{
                      color: colors.White,
                      backgroundColor: colors.primaryRed,
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {loading ? (
                      <CircularProgress
                        size={24}
                        sx={{ color: colors.White }}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Box>
              </form>
            </Box>
            <Box
              data-aos="fade-up-left"
              data-aos-duration="1000"
              sx={{
                maxWidth: { xs: "100%", lg: "550px" },
                minWidth: { lg: "480px" },
              }}
            >
              <CardContactUs />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function CardContactUs() {
  const contactCardText = {
    fontSize: fonts.tertiaryTypography,
    color: colors.White,
  };

  return (
    <>
      <Box
        sx={{
          maxwidth: { xs: "400px", xl: "450px" },
          padding: { xs: "20px 30px 0 30px" },
          textAlign: "left",
          backgroundColor: colors.primaryRed,
        }}
      >
        <Typography sx={{ ...contactCardText }}>
          Reach out to us for prompt assistance. We're just a message away,
          dedicated to ensuring your dining is seamless and enjoyable.s
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", sm: "30px", md: "50px" },
            paddingY: { xs: "20px", sm: "30px", md: "50px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: { xs: "20px", sm: "25px", md: "30px" },
            }}
          >
            <Image
              style={{ width: "40px", height: "auto" }}
              src={svgs.Location}
              alt="location logo"
            />
            <Box>
              <Typography
                sx={{
                  ...contactCardText,
                  fontWeight: "700",
                }}
              >
                Location
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                36 Westgate, Rotherham S60 1AS, United Kingdom
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                +44 1709 838899
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: { xs: "20px", sm: "25px", md: "30px" },
            }}
          >
            <Image
              style={{ width: "40px", height: "auto" }}
              src={svgs.Email}
              alt="location logo"
            />
            <Box>
              <Typography
                sx={{
                  ...contactCardText,
                  fontWeight: "700",
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  ...contactCardText,
                }}
              >
                info@sabirsgrill.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
