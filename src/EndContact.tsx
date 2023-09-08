import { Box, Button, Link, Stack, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function EndContact() {
  const stackTransparentBorder = {
    display: "flex",
    height: "100%",
    maxWidth: "fit-content",
    width: "auto",
    background: "rgb(255, 255, 255, 0.16)",
    padding: "10px",
    borderRadius: "10px",
    flexDirection: "colum",
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
          backgroundImage: "url(EndContact.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "100vw",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={stackTransparentBorder}>
          <Typography sx={typographyOrangeShadow}>
            If you have improvements or cool ideas
          </Typography>
          <Typography sx={typographyOrangeShadow}>
            feel free to contact me on
          </Typography>
          <Link
            href="https://discordapp.com/users/465315316709326868"
            underline="none"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              sx={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(255, 136, 0)",
                "&:hover": { backgroundColor: "rgb(181, 96, 0)" },
              }}
              variant="contained"
              endIcon={<ContentCopyIcon />}
            >
              Discord
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
export default EndContact;
