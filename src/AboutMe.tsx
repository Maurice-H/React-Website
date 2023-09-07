import EndContact from "./EndContact";
import NavBar from "./NavBar";
import ShortInfoToMe from "./ShortInfoToMe";
import WelcomePage from "./Welcome";

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <WelcomePage />
      <ShortInfoToMe />
      <EndContact />
    </>
  );
}