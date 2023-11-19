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
import React from "react";
import { useAppDispatch } from "../store/hooks";
import { setIsAuth } from "../store/slices/userSlice";

export const Auth = () => {
  const dispatch = useAppDispatch();

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
              <Input type="text" placeholder="Ваш логин" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Пароль</FormLabel>
              <Input type="password" placeholder="Введите пароль" />
            </FormControl>
          </Stack>
          <Box>
            <Button className="mt-3" onClick={() => dispatch(setIsAuth(true))}>
              Войти
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Container>
  );
};
