import {
  Avatar,
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

function ShortInfoToMe() {
  const gamingAvatarIcons = [
    "gamingAvatarIcons/rocket league.ico",
    "gamingAvatarIcons/osu.png",
  ];

  const codingAvatarIcons = [
    "codingAvatarIcons/React-icon.png",
    "codingAvatarIcons/Vue-icon.png",
    "codingAvatarIcons/C++-icon.png",
    "codingAvatarIcons/Python-icon.png",
  ];

  const [gamingAvatarIconsIndex, setGamingAvatarIconsIndex] = useState(0);
  const [codingAvatarIconsIndex, setCodingAvatarIconsIndex] = useState(0);

  useEffect(() => {
    function changeIndex() {
      setGamingAvatarIconsIndex(
        (prev) => (prev + 1) % gamingAvatarIcons.length
      );
      setCodingAvatarIconsIndex(
        (prev) => (prev + 1) % codingAvatarIcons.length
      );
    }
    const intervalId = setInterval(changeIndex, 3000);
    return () => clearInterval(intervalId);
  });

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
  const stackTransparentWhiteBorder = {
    display: "flex",
    height: "320px",
    width: "10px",
    background: "rgb(255, 255, 255, 0.35)",
    margin: "10px",
    borderRadius: "10px",
    flexDirection: "colum",
    alignItems: "center",
  };

  const typographyOrangeShadow = {
    textShadow: "black 5px 0 3px",
    mixBlendMode: "hard-light",
    fontSize: "2rem",
    color: "rgb(255, 255, 255)",
  };

  const typographyOrangeShadowSmall = {
    textShadow: "black 1px 0 6px",
    mixBlendMode: "hard-light",
    fontSize: "1.6rem",
    color: "rgb(255, 255, 255)",
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          backgroundImage: "url(ShortInfoBg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minWidth: "100vw",
          minHeight: "100vh",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            right: "13%",
            display: "flex",
            width: "40%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={12} md={6}>
            <Stack sx={stackTransparentBorder}>
              <Typography sx={typographyOrangeShadow}>Career</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="EyeC logo" src="EyeC.png"></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={typographyOrangeShadowSmall}
                    primary="Apprenticeship for Application Development"
                    secondary="From 2023 to 2025"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="EyeC logo" src="EyeC.png"></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={typographyOrangeShadowSmall}
                    primary="Working as a Software Developer"
                    secondary="In Future"
                  />
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Stack sx={stackTransparentWhiteBorder}></Stack>

          <Grid item xs={12} md={6}>
            <Stack sx={stackTransparentBorder}>
              <Typography sx={typographyOrangeShadow}>Hobbys</Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="gamingAvatarIcons"
                      src={gamingAvatarIcons[gamingAvatarIconsIndex]}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={typographyOrangeShadowSmall}
                    primary="Gaming"
                    secondary="Rocket League, Osu, Singleplayer games"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="codingAvatarIcons"
                      src={codingAvatarIcons[codingAvatarIconsIndex]}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={typographyOrangeShadowSmall}
                    primary="Coding"
                    secondary="React, Vue, C++, Python, etc."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="AniworldAvatarIcons"
                      src="Aniworld.png"
                    ></Avatar>
                  </ListItemAvatar>
                  <Link
                    href="https://aniworld.to/user/profil/maizu_u#"
                    underline="none"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ListItemText
                      sx={typographyOrangeShadowSmall}
                      primary="Animes"
                      secondary="Click for my last watched animes"
                    />
                  </Link>
                </ListItem>
              </List>
            </Stack>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
export default ShortInfoToMe;
