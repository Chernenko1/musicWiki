import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
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
  ButtonGroup,
  useEditableControls,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { updateTable } from "../../http/albumAPI";
import { fetchRoles } from "../../http/roleAPI";

interface Props {
  arr: BandMember[];
}

export const MembersTable: React.FC<Props> = ({ arr }) => {
  const [value, setValue] = useState("");
  const [roles, setRoles] = useState<Roles[]>([{ id: 0, role_name: "none" }]);

  useEffect(() => {
    fetchRoles().then((data: any) => setRoles(data));
  }, []);

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
              <Th>Имя</Th>
              <Th>Фамилия</Th>
              <Th>Роль</Th>
              <Th>Описание</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: BandMember) => (
              <Tr key={itm.id}>
                <Td width={"20%"}>{itm.first_name}</Td>
                <Td width={"10%"}>{itm.last_name}</Td>
                <Td width={"10%"}>{roles[1].role_name}</Td>

                <Td width={"60%"}>
                  <Text noOfLines={3} style={{ maxWidth: "" }}>
                    {itm.biography}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Название</Th>
              <Th>Дата Релиза</Th>
              <Th>Стиль музыки</Th>
              <Th>Описание</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
