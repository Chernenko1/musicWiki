import { Route } from "react-router-dom";
import {
  ADMIN_ROUTE,
  GROUP_ROUTE,
  LOGIN_ROUTE,
  REG_ROUTE,
} from "./utils/consts";
import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { GroupPage } from "./pages/GroupPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: GROUP_ROUTE + "/:id",
    Component: GroupPage,
  },
];

export const unAuthRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REG_ROUTE,
    Component: Auth,
  },
];
