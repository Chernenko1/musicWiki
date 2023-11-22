import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ADMIN_ROUTE, CREATE_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
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
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      borderBottomWidth={1}
    >
      <Box p="2">
        <Heading size="md">Adminpanel</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        {isAuth ? (
          <Box className="d-flex align-items-center px-4">
            <Link to={CREATE_ROUTE} className="mt-1">
              <Button className="mr-15">Создать</Button>
            </Link>
            <Button
              className="mt-3"
              onClick={() => {
                signOut();
              }}
              style={{ bottom: 5 }}
            >
              Выйти
            </Button>
          </Box>
        ) : (
          <Button>
            <Link to={LOGIN_ROUTE}>Войти</Link>
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
};
