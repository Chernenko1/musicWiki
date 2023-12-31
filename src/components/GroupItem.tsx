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
import { destroyGroup } from "../http/groupAPI";

interface Props {
  id: number;
  image: string;
  title: string;
  describe: string;
  onChildeClick: any;
}

export const GroupItem: React.FC<Props> = ({
  id,
  title,
  describe,
  image,
  onChildeClick,
}) => {
  const handleClick = () => {
    destroyGroup({ id });
    onChildeClick();
  };
  return (
    <Card maxW="280px" bg="lightgray" key={id + id}>
      <CardBody>
        <Image
          src={process.env.REACT_APP_API_URL + image}
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

          <Button variant="ghost" colorScheme="red" onClick={handleClick}>
            Удалить
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
