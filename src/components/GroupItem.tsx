import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { GROUP_ROUTE } from "../utils/consts";

interface Props {
  id: number;
  image: string;
  title: string;
  describe: string;
}

export const GroupItem: React.FC<Props> = ({ id, title, describe }) => {
  return (
    <Card maxW="250px" bg="lightgray">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text noOfLines={2}>{describe}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={GROUP_ROUTE + `/${id}`}>
            <Button variant="solid" colorScheme="blue">
              Изменить
            </Button>
          </Link>

          <Button variant="ghost" colorScheme="red">
            Удалить
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
