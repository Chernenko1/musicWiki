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
  arr: Concert[];
}

export const ConcertsTable: React.FC<Props> = ({ arr }) => {
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
              <Th width={"20%"}>Название</Th>
              <Th width={"10%"}>Город</Th>
              <Th width={"10%"}>Дата</Th>
              <Th width={"60%"}>Проданные билеты</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Concert) => (
              <Tr key={itm.id}>
                <Td>{itm.concert_name}</Td>
                <Td>{itm.city_id}</Td>
                <Td>{itm.date}</Td>

                <Td>{itm.sold_tickets_id}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th width={"20%"}>Название</Th>
              <Th width={"10%"}>Город</Th>
              <Th width={"10%"}>Дата</Th>
              <Th width={"60%"}>Проданные билеты</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
