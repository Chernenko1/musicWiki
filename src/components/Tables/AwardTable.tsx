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
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CreateAward } from "../modals/CreateAward";
import { updateAward } from "../../http/awardsAPI";
import { IoCheckmark, IoClose } from "react-icons/io5";

interface Props {
  arr: Award[];
}

export const AwardsTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

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
                  <Flex>
                    <Editable
                      defaultValue={
                        itm.award_name === null || itm.award_name.length === 0
                          ? "нет записи"
                          : itm.award_name
                      }
                    >
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        onFocus={() => setActiveIndex(index)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updateAward(itm.id, { award_name: name });
                        setName("");
                      }}
                      style={{
                        display:
                          name.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"indianred"}
                      onClick={() => setName("")}
                      style={{
                        display:
                          name.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoClose size={10} />
                    </Button>
                  </Flex>
                </Td>
                <Td>
                  <Flex>
                    <Editable
                      defaultValue={
                        itm.date === null || itm.date.length === 0
                          ? "нет записи"
                          : itm.date
                      }
                    >
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                        onFocus={() => setActiveIndex(index)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updateAward(itm.id, { date });
                        setDate("");
                      }}
                      style={{
                        display:
                          date.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"indianred"}
                      onClick={() => setDate("")}
                      style={{
                        display:
                          date.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoClose size={10} />
                    </Button>
                  </Flex>
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
