import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, unAuthRoutes } from "../routes";
import { NoPage } from "../pages/NoPage";
import { useAppSelector } from "../store/hooks";

export const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  return (
    <Routes>
      {isAuth &&
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
