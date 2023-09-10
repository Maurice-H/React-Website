import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import GameHistory from "./pages/GameHistory";
import UnityGame from "./pages/UnityGame";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AboutMe />} />
      <Route path="/UnityGame" element={<UnityGame />} />
      <Route path="/GameHistory" element={<GameHistory />} />
    </>
  ),
  { basename: "/React-Website/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
