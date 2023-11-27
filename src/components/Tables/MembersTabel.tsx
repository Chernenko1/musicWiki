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
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { updateTable } from "../../http/albumAPI";
import { fetchRoles } from "../../http/roleAPI";
import { CreateMember } from "../modals/CreateMember";

interface Props {
  arr: BandMember[];
}

export const MembersTable: React.FC<Props> = ({ arr }) => {
  const [memberVisible, setMemberVisible] = useState(false);

  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            <Button onClick={() => setMemberVisible(true)}>
              Добавить участника
            </Button>
          </TableCaption>
          <Button></Button>
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
                <Td width={"10%"}>{itm["role.role_name"]}</Td>

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
              <Th>Имя</Th>
              <Th>Фамилия</Th>
              <Th>Роль</Th>
              <Th>Описание</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <CreateMember
        isOpen={memberVisible}
        onClose={() => setMemberVisible(false)}
      />
    </Box>
  );
};
