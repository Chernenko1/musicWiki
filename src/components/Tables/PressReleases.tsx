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
  arr: PR[];
}

export const PressReleasesTable: React.FC<Props> = ({ arr }) => {
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
              <Th>Заголовок</Th>
              <Th>Дата</Th>
              <Th>Текст</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: PR) => (
              <Tr key={itm.id}>
                <Td>{itm.headline}</Td>
                <Td>{itm.public_date}</Td>
                <Td>{itm.text}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Заголовок</Th>
              <Th>Дата</Th>
              <Th>Текст</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
