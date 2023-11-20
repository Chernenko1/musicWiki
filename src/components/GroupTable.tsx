import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  obj: {};
}

export const GroupTable: React.FC<Props> = ({ obj }) => {
  let head: string[] = [];
  let body: any[] = [];

  for (let [key, value] of Object.entries(obj)) {
    head.push(key);
    body.push(value);
  }

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Описание таблицы</TableCaption>
          <Thead>
            <Tr>
              {head.map((itm) => (
                <Th>{itm}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {body.map((itm) => (
                <Td>{itm}</Td>
              ))}
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              {head.map((itm) => (
                <Th>{itm}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
