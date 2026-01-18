import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";

import NavBar from "./components/NavBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="w-full h-full flex flex-col">
        <NavBar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="w-full h-full flex flex-col">
        <NavBar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
