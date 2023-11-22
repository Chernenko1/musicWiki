import { Container } from "@chakra-ui/react";
import React from "react";
import { GroupsList } from "../components/GroupsList";

export const Admin = () => {
  return (
    <div
      style={{
        display: "flex",

        backgroundColor: "lightgreen",
      }}
    >
      <GroupsList />
    </div>
  );
};
