import { Box, Stack, Typography } from "@mui/material";
import nezukoRunning from "/nezukoRunning.gif";

function WelcomePage() {
  const stackTransparentBorder = {
    display: "flex",
    height: "100%",
    maxWidth: "fit-content",
    width: "auto",
    background: "rgb(255, 255, 255, 0.16)",
    padding: "10px",
    borderRadius: "10px",
    flexDirection: "row",
    alignItems: "center",
  };

  const typographyOrangeShadow = {
    textShadow: "black 3px 0 4px",
    mixBlendMode: "darken",
    fontSize: "2.5rem",
    color: "rgb(255, 136, 0)",
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          backgroundImage: "url(backgroundImage.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minWidth: "100vw",
          minHeight: "100vh",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack sx={stackTransparentBorder}>
          <Typography sx={typographyOrangeShadow}>
            This is my first Website made with react and MUI Material UI
          </Typography>
        </Stack>
        <Stack sx={stackTransparentBorder}>
          <Typography sx={typographyOrangeShadow}>hope you like it</Typography>
          <img
            style={{
              maxHeight: "40px",
            }}
            src={nezukoRunning}
            alt="nezukoRunning"
          />
        </Stack>
      </Box>
    </>
  );
}
export default WelcomePage;
