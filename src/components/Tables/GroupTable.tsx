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
  arr: [];
}

export const GroupTable: React.FC<Props> = ({ arr }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Описание таблицы</TableCaption>
          <Thead>
            <Tr>
              {arr.map((itm: any) => (
                <Th>{itm.album_name}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {arr.map((itm: any) => (
                <Td>{itm.release_year}</Td>
              ))}
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              {arr.map((itm: any) => (
                <Th>{itm.description}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
