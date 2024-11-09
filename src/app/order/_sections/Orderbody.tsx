import Button from "@/_components/Button";
import MapComponent from "@/_components/Map";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Typography, Grid } from "@mui/material";
export default function Orderbody() {
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
        }}
      >
        <Typography
          sx={{
            ...headingStyles,
            color: colors.primaryRed,
          }}
        >
          Order Now
        </Typography>
        <Typography
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          Feast Later
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            sx={{
              maxWidth: "1600px",
              gap: { lg: "100px", xl: "200px" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
            container
          >
            <LocationCard />
            <LocationCard />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

function LocationCard() {
  return (
    <Grid
      item
      xs={12}
      lg={5}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        marginTop: { xs: "40px", sm: "50px", md: "100px" },
      }}
    >
      <Box>
        <Box
          sx={{
            height: { xs: "400px", md: "500px", lg: "600px", xl: "700px" },
            width: "100%",
          }}
        >
          <MapComponent lat={0} lng={0} />
        </Box>
        <Box
          sx={{
            backgroundColor: colors.primaryRed,
            padding: "30px",
            color: colors.White,
            display: "flex",
            justifyContent: "space-between",
            alignItems: { sx: "flex-start", sm: "center" },
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography>
              36 Westgate, Rotherham S60 1AS, United Kingdom
            </Typography>
            <Typography>+44 1709 838899</Typography>
          </Box>
          <Button
            styles={{
              "&:hover": {
                backgroundColor: colors.secondaryYellow,
              },
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export { LocationCard };
