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
import { CreateMember } from "../modals/CreateMember";
import { FormForTable } from "../FormForTable";
import { SelectedForTable } from "../SelectedForTable";
import { updateAlbum } from "../../http/albumAPI";
import { destroyBandMember, updateBandMember } from "../../http/bandMembers";
import { IoTrashBinOutline } from "react-icons/io5";

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
                <Td width={"10%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.first_name}
                    update_col="first_name"
                    updateFunc={updateBandMember}
                    delFunc={destroyBandMember}
                  />
                </Td>
                <Td width={"10%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.last_name}
                    update_col="last_name"
                    updateFunc={updateBandMember}
                    delFunc={destroyBandMember}
                  />
                </Td>
                <Td width={"20%"}>
                  <SelectedForTable
                    id={itm.id}
                    item={String(itm["role.role_name"])}
                    update_col="role_name"
                    updateFunc={updateBandMember}
                    delFunc={destroyBandMember}
                  />
                </Td>

                <Td width={"60%"}>
                  <Text noOfLines={3} style={{ maxWidth: "" }}>
                    <FormForTable
                      id={itm.id}
                      item={itm.biography}
                      update_col="biography"
                      updateFunc={updateBandMember}
                      style={{ width: "40em", height: "10em" }}
                    />
                  </Text>
                </Td>
                <Td>
                  <Button
                    size={"xs"}
                    bgColor={"indianred"}
                    onClick={() => destroyBandMember({ id: itm.id })}
                  >
                    <IoTrashBinOutline />
                  </Button>
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
