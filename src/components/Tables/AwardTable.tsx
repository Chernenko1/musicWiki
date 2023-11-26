import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchRoles } from "../../http/roleAPI";

interface Props {
  arr: Award[];
}

export const AwardsTable: React.FC<Props> = ({ arr }) => {
  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Описание таблицы</TableCaption>
          <Thead>
            <Tr>
              <Th width={"20%"}>Заголовок</Th>
              <Th width={"80%"}>Дата</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Award) => (
              <Tr key={itm.id}>
                <Td>{itm.award_name}</Td>
                <Td>{itm.date}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th width={"20%"}>Заголовок</Th>
              <Th width={"80%"}>Дата</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
