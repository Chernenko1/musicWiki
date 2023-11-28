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
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Editable defaultValue={itm.headline}>
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => setHeadline(e.target.value)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updatePr(itm.id, { headline });
                        setHeadline("");
                      }}
                      isDisabled={headline.length === 0 ? true : false}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
                </Td>
                <Td width={"10%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Editable defaultValue={itm.public_date}>
                      <EditablePreview defaultValue={itm.public_date} />
                      <EditableTextarea
                        onChange={(e) => setPublicDate(e.target.value)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updatePr(itm.id, { public_date: publicDate });
                        setPublicDate("");
                      }}
                      isDisabled={publicDate.length === 0 ? true : false}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
                </Td>

                <Td width={"50%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Editable defaultValue={itm.text}>
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => setText(e.target.value)}
                        width={"40vw"}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updatePr(itm.id, { text });
                        setText("");
                      }}
                      isDisabled={text.length === 0 ? true : false}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
                </Td>
                <Td width={"10%"}>
                  <Flex gap={2}>
                    {/* <Button
                      onClick={() =>
                        updatePr(itm.id, {
                          headline,
                          public_date: publicDate,
                          text,
                        })
                      }
                      bgColor={"lightgreen"}
                      disabled
                    >
                      <IoCheckmark size={20} />
                    </Button> */}
                    <Button
                      onClick={() => destroyPr({ id: itm.id })}
                      bgColor={"indianred"}
                    >
                      <IoTrashBinOutline size={20} />
                    </Button>
                  </Flex>
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
