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
import React, { useState } from "react";
import { updateTable } from "../../http/albumAPI";

interface Props {
  arr: [];
}

export const AlbumTable: React.FC<Props> = ({ arr }) => {
  const [value, setValue] = useState("");

  return (
    <Box>
      <TableContainer whiteSpace={"normal"}>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Описание таблицы</TableCaption>
          <Thead>
            <Tr>
              <Th>Название</Th>
              <Th>Дата Релиза</Th>
              <Th>Стиль музыки</Th>
              <Th>Описание</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: any) => (
              <Tr>
                <Td width={"20%"}>
                  <Editable
                    defaultValue={itm.album_name}
                    onSubmit={() => updateTable(itm.id, { album_name: value })}
                    onCancel={() => setValue(itm.album_name)}
                  >
                    <EditablePreview />
                    <EditableInput
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </Editable>
                </Td>
                <Td width={"10%"}>{itm.release_year}</Td>
                <Td width={"10%"}>{itm.music_style_id}</Td>
                <Td width={"60%"}>
                  <Text noOfLines={3} style={{ maxWidth: "" }}>
                    {itm.description}
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
