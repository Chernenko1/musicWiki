import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { authRoutes, unAuthRoutes } from "../routes";
import { Admin } from "../pages/Admin";
import { NoPage } from "../pages/NoPage";

export const AppRouter = () => {
  const isAdmin: boolean = false;

  return (
    <Routes>
      {isAdmin &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      {unAuthRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
