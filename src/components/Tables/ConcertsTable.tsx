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
import { FormForTable } from "../FormForTable";
import { updateConcert } from "../../http/concertAPI";
import { SelectedForTable } from "../SelectedForTable";
import { updateConcTickets } from "../../http/concTickets";

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
                <Td>
                  <FormForTable
                    id={itm.id}
                    item={itm.concert_name}
                    update_col="concert_name"
                    func={updateConcert}
                  />
                </Td>
                <Td>
                  <SelectedForTable
                    id={itm.id}
                    item={String(itm["city.city_name"])}
                    update_col="city_id"
                    func={updateConcert}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.id}
                    item={itm.date}
                    update_col="date"
                    func={updateConcert}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.sold_tickets_id}
                    item={String(itm["concert_ticket.price"])}
                    update_col="price"
                    func={updateConcTickets}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.sold_tickets_id}
                    item={String(itm["concert_ticket.sale_date"])}
                    update_col="sale_date"
                    func={updateConcTickets}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.sold_tickets_id}
                    item={String(itm["concert_ticket.sold_tickets"])}
                    update_col="sold_tickets"
                    func={updateConcTickets}
                  />
                </Td>
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
