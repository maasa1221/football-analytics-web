import * as React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/App";
import Three from "./Pages/Three/App";
import { useTracking } from "./useTracking";

export const AppRoutes: React.FC = () => {
  useTracking();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Three />} />
      </Routes>
    </>
  );
};

export { AppRoutes as Routes };
