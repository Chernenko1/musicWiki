import {
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
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

import { IoCheckmark, IoTrashBinOutline } from "react-icons/io5";
import { destroyPr, updatePr } from "../../http/prAPI";
import { FormForTable } from "../FormForTable";

interface Props {
  arr: PR[];
}

export const PressReleasesTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);

  const [headline, setHeadline] = useState("");
  const [publicDate, setPublicDate] = useState("");
  const [text, setText] = useState("");

  console.log(text.length);

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
              <Th>Заголовок</Th>
              <Th>Дата</Th>
              <Th>Текст</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: PR) => (
              <Tr key={itm.id}>
                <Td width={"20%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.headline}
                    update_col="headline"
                    updateFunc={updatePr}
                    delFunc={destroyPr}
                  />
                </Td>
                <Td width={"10%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.public_date}
                    update_col="public_date"
                    updateFunc={updatePr}
                    delFunc={destroyPr}
                  />
                </Td>

                <Td width={"50%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.text}
                    update_col="text"
                    updateFunc={updatePr}
                    style={{ width: "40em", height: "8em" }}
                  />
                </Td>
                <Td>
                  <Button
                    size={"xs"}
                    bgColor={"indianred"}
                    onClick={() => destroyPr({ id: itm.id })}
                  >
                    <IoTrashBinOutline />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Заголовок</Th>
              <Th>Дата</Th>
              <Th>Текст</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <CreatePR isOpen={visible} onClose={() => setVisible(false)} />
    </Box>
  );
};
