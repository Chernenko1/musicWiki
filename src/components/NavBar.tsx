import React from "react";
import { Navbar, Container, NavLink } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Box, Button } from "@chakra-ui/react";
import { setIsAuth, setUser } from "../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    navigate(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Text>
          <Link to={ADMIN_ROUTE}>AdminPanel</Link>
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isAuth ? (
            <Button
              className="mt-3"
              onClick={() => {
                signOut();
              }}
              style={{ bottom: 5 }}
            >
              Выйти
            </Button>
          ) : (
            <Button>
              <Link to={LOGIN_ROUTE}>Войти</Link>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
