import {
  Box,
  Button,
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
import React, { useState } from "react";
import { CreateAward } from "../modals/CreateAward";
import { destroyAward, updateAward } from "../../http/awardsAPI";
import { IoTrashBinOutline } from "react-icons/io5";
import { FormForTable } from "../FormForTable";

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
            {arr.map((itm: Award, index: number) => (
              <Tr key={itm.id}>
                <Td>
                  <FormForTable
                    id={itm.id}
                    item={itm.award_name}
                    update_col="award_name"
                    updateFunc={updateAward}
                    style={{ width: "15em", height: "5em" }}
                  />
                </Td>
                <Td>
                  <FormForTable
                    id={itm.id}
                    item={itm.date}
                    update_col="date"
                    updateFunc={updateAward}
                  />
                </Td>
                <Td>
                  <Button
                    size={"xs"}
                    bgColor={"indianred"}
                    onClick={() => destroyAward({ id: itm.id })}
                  >
                    <IoTrashBinOutline />
                  </Button>
                </Td>
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
