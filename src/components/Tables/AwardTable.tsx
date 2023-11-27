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
import { CreateAward } from "../modals/CreateAward";

interface Props {
  arr: Award[];
}

export const AwardsTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            <Button onClick={() => setVisible(true)}>Добавить награду</Button>
          </TableCaption>
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
      <CreateAward isOpen={visible} onClose={() => setVisible(false)} />
    </Box>
  );
};
