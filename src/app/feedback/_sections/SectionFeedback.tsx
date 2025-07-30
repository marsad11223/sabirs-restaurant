"use client";
import Button from "@/_components/Button";
import { colors, fonts } from "@/app/utils/themes";
import { Box, CircularProgress, Typography } from "@mui/material";
import CustomizedSwitches from "../_components/IOSSwitch";
import InputFeedback from "@/_components/FeedbackInput";
import svgs from "@/_assets/svgs";
import Image from "next/image";

export default function SectionFeedback() {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    textAlign: { xs: "center", md: "left" },
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(worldMap.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
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
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "430px",
              width: "100%",
              textWrap: "nowrap",
            }}
          >
            <Typography
              data-aos="fade-left"
              data-aos-duration="1000"
              sx={{
                ...headingStyles,
                color: " #FFD40D",
              }}
            >
              submit your
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-duration="1000"
              sx={{
                ...headingStyles,
                color: "#851A1D",
              }}
            >
              powerful feedback{" "}
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "640px",
              bgcolor: "#fff",
              borderRadius: { xs: "13px", sm: "24px" },
              p: { xs: "28px", sm: "48px" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <CustomizedSwitches />
              <Box sx={{ width: "100%", mt: "30px" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: { xs: "16px", md: "24px" },
                    justifyContent: "space-between",
                  }}
                >
                  <InputFeedback
                    inputType="text"
                    placeholder="John Carter"
                    label="Name"
                    icon={svgs.User}
                    sx={{ maxWidth: "260px" }}
                  />
                  <InputFeedback
                    inputType="email"
                    placeholder="Email address"
                    label="Email"
                    icon={svgs.emailfeed}
                    sx={{ maxWidth: "260px" }}
                  />
                </Box>
                <Box sx={{ width: "100%", mt: "30px" }}>
                  <InputFeedback
                    inputType="text"
                    placeholder="Your Number"
                    label="Phone number"
                    icon={svgs.mobfeed}
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
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: { xs: "6px", sm: "12px" },
                    }}
                  >
                    <Image
                      src={svgs.ratingStars}
                      alt="start"
                      style={{ width: "21px", height: "24px" }}
                    />
                    <Image
                      src={svgs.ratingStars}
                      alt="start"
                      style={{ width: "21px", height: "24px" }}
                    />
                    <Image
                      src={svgs.ratingStars}
                      alt="start"
                      style={{ width: "21px", height: "24px" }}
                    />
                    <Image
                      src={svgs.ratingGrayStars}
                      alt="start"
                      style={{ width: "21px", height: "24px" }}
                    />
                    <Image
                      src={svgs.ratingGrayStars}
                      alt="start"
                      style={{ width: "21px", height: "24px" }}
                    />
                  </Box>
                </Box>

                <Box sx={{ width: "100%", mt: "30px" }}>
                  <InputFeedback
                    inputType="message"
                    placeholder="If you have more to add, please type it here..."
                    label="Your Feedback"
                    isbool={true}
                    sx={{
                      width: "100%",
                      minHeight: "120px",
                      borderRadius: "20px",
                      mt: { xs: "10px", sm: "20px" },
                      border: `1px solid ${colors.primaryRed}`,
                      "& .MuiInputBase-root": {
                        padding: { xs: "14px", sm: "24px" },
                        color: "#41414380", // Placeholder text color
                      },
                      "& .MuiInput-underline:before": {
                        border: `0px solid ${colors.primaryRed} `,
                      },
                      "& .MuiInput-underline:after": {
                        border: `0px solid ${colors.primaryRed}`,
                      },
                      "& .MuiInput-underline.Mui-focused:after": {
                        borderBottomColor: colors.primaryRed,
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ paddingTop: { xs: "27px", sm: "30px" } }}>
              <Button
                type="submit"
                disabled={false}
                // onClick={}
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
                Send Feedback
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      ;
    </>
  );
}
