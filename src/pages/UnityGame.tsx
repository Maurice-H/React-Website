import { Unity, useUnityContext } from "react-unity-webgl";
import NavBar from "../NavBar";
import { Box } from "@mui/material";

export default function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "UnityGameBuild/Build/Game.loader.js",
    dataUrl: "UnityGameBuild/Build/Game.data",
    frameworkUrl: "UnityGameBuild/Build/Game.framework.js",
    codeUrl: "UnityGameBuild/Build/Game.wasm",
  });

  return (
    <>
      <NavBar shouldReload={true} />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          backgroundImage: "url(UnityPageBackground.jpg)",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              width: "73.4vw",
              height: "100vh",
              backgroundPosition: "top",
              backgroundImage: "url(UnityGameBackground.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              zIndex: "2",
              pointerEvents: "none",
            }}
          ></Box>
          <Unity
            unityProvider={unityProvider}
            style={{
              position: "absolute",
              display: "flex",
              width: "58vw",
              height: "48vh",
              zIndex: "1",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
