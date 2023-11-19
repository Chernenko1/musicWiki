import { Container } from "@chakra-ui/react";
import React from "react";
import { GroupsList } from "../components/GroupsList";

export const Admin = () => {
  return (
    <Container
      minH={window.innerHeight}
      minW={window.innerWidth}
      bg="green.400"
      color="#262626"
    >
      <GroupsList />
    </Container>
  );
};
