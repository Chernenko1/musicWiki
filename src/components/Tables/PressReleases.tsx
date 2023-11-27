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
import React, { useState } from "react";
import { CreatePR } from "../modals/CreatePR";

interface Props {
  arr: PR[];
}

export const PressReleasesTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            <Button onClick={() => setVisible(true)}>
              Добавить пресс-релиз
            </Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th width={"20%"}>Заголовок</Th>
              <Th width={"10%"}>Дата</Th>
              <Th width={"70%"}>Текст</Th>
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
              <Th width={"20%"}>Заголовок</Th>
              <Th width={"10%"}>Дата</Th>
              <Th width={"70%"}>Текст</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <CreatePR isOpen={visible} onClose={() => setVisible(false)} />
    </Box>
  );
};
