import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CreateGroup } from "../components/modals/CreateGroup";
import { useAppSelector } from "../store/hooks";

export const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const b = useAppSelector((state) => state.groups.musicStyleData);
  console.log(b);

  return (
    <Container>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Box
          display={"flex"}
          bg={"lightgray"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={10}
          cursor={"pointer"}
          onClick={onOpen}
        >
          <Text>Создать новую группу</Text>
        </Box>
        <Spacer />
        <Box
          display={"flex"}
          bg={"lightgray"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={10}
          cursor={"pointer"}
        >
          <Text className="">Создать новый альбом</Text>
        </Box>
      </Flex>
      <CreateGroup isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Container>
  );
};
