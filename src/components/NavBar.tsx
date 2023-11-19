import React from "react";
import { Navbar, Container, NavLink } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "@chakra-ui/react";
import { setIsAuth } from "../store/slices/userSlice";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const dispatch = useAppDispatch();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Text>
          <Link to={ADMIN_ROUTE}>AdminPanel</Link>
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isAuth ? (
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
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
