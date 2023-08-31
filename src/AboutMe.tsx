import { Box, Stack, Typography } from "@mui/material";

function AboutMe() {
  const textStyle = {
    textShadow: "black 1px 0 10px",
  };
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        backgroundImage:
          "url(https://vsthemes.org/uploads/posts/2022-10/1665244677_skrinshot-08-10-2022-20_56_58.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "92.65vh",
        minWidth: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <Typography style={textStyle} fontSize={"3rem"} color={"orange"}>
          Welcome to my Page
        </Typography>
      </Stack>
    </Box>
  );
}
export default AboutMe;
