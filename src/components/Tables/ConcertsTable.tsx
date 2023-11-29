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
import { destroyConcert, updateConcert } from "../../http/concertAPI";
import { SelectedForTable } from "../SelectedForTable";
import { destroyConcTickets, updateConcTickets } from "../../http/concTickets";
import { IoTrashBinOutline } from "react-icons/io5";

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
                    updateFunc={updateConcert}
                    delFunc={destroyConcert}
                  />
                </Td>
                <Td>
                  <SelectedForTable
                    id={itm.id}
                    item={String(itm["city.city_name"])}
                    update_col="city_id"
                    updateFunc={updateConcert}
                    delFunc={destroyConcert}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.id}
                    item={itm.date}
                    update_col="date"
                    updateFunc={updateConcert}
                    delFunc={destroyConcert}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.sold_tickets_id}
                    item={String(itm["concert_ticket.price"])}
                    update_col="price"
                    updateFunc={updateConcTickets}
                    delFunc={destroyConcTickets}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.sold_tickets_id}
                    item={String(itm["concert_ticket.sale_date"])}
                    update_col="sale_date"
                    updateFunc={updateConcTickets}
                    delFunc={destroyConcTickets}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.sold_tickets_id}
                    item={String(itm["concert_ticket.sold_tickets"])}
                    update_col="sold_tickets"
                    updateFunc={updateConcTickets}
                    delFunc={destroyConcTickets}
                  />
                </Td>
                <Td>
                  <Button
                    size={"xs"}
                    bgColor={"indianred"}
                    onClick={() => destroyConcert({ id: itm.id })}
                  >
                    <IoTrashBinOutline />
                  </Button>
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
