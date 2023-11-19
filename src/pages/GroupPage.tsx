import { Container } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

export const GroupPage = () => {
  const { id } = useParams();
  return (
    <Container style={{ flexDirection: "row" }}>
      <div>{id}</div>
      <div></div>
    </Container>
  );
};
