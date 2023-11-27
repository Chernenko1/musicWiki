import {
  Box,
  Button,
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
import { CreateConcerts } from "../modals/CreateCT";

interface Props {
  arr: Concert[];
}

export const ConcertsTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            <Button onClick={() => setVisible(true)}>Добавить концерт</Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th width={"20%"}>Название</Th>
              <Th width={"10%"}>Город</Th>
              <Th width={"10%"}>Дата</Th>
              <Th width={"20%"}>Цена билета</Th>
              <Th width={"20%"}>Дата продаж</Th>
              <Th width={"20%"}>Проданные билеты</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Concert) => (
              <Tr key={itm.id}>
                <Td>{itm.concert_name}</Td>
                <Td>{itm["city.city_name"]}</Td>
                <Td>{itm.date}</Td>
                <Td>{itm["concert_ticket.price"]}</Td>
                <Td>{itm["concert_ticket.sale_date"]}</Td>
                <Td>{itm["concert_ticket.sold_tickets"]}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th width={"20%"}>Название</Th>
              <Th width={"10%"}>Город</Th>
              <Th width={"10%"}>Дата</Th>
              <Th width={"20%"}>Цена билета</Th>
              <Th width={"20%"}>Дата продаж</Th>
              <Th width={"20%"}>Проданные билеты</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <CreateConcerts isOpen={visible} onClose={() => setVisible(false)} />
    </Box>
  );
};
