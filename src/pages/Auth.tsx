import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setIsAuth, setUser } from "../store/slices/userSlice";
import { login } from "../http/userAPI";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../utils/consts";

export const Auth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async () => {
    try {
      let user;
      user = await login(email, password);
      dispatch(setUser(user));
      dispatch(setIsAuth(true));
      navigate(ADMIN_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex jusctify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }}>
        <CardHeader className="m-auto">
          <Heading size="md">Авторизация</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <FormControl isRequired>
              <FormLabel>Логин</FormLabel>
              <Input
                type="text"
                placeholder="Ваш логин"
                value={email}
                onChange={(e) => setLogin(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Пароль</FormLabel>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Stack>
          <Box>
            <Button
              className="mt-3"
              onClick={() => {
                signIn();
              }}
            >
              Войти
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Container>
  );
};
