import {
  ADMIN_ROUTE,
  CREATE_ROUTE,
  GROUP_ROUTE,
  LOGIN_ROUTE,
  REG_ROUTE,
} from "./utils/consts";
import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { GroupPage } from "./pages/GroupPage";
import { Create } from "./pages/Create";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: GROUP_ROUTE + "/:id",
    Component: GroupPage,
  },
  {
    path: CREATE_ROUTE,
    Component: Create,
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
