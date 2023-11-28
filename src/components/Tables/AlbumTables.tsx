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
import { fetchGroups } from "../../http/groupAPI";
import { CreateAlbum } from "../modals/CreateAlbum";
import { useAppSelector } from "../../store/hooks";

interface Props {
  arr: Album[];
  // ms: MusicStyles[];
}

export const AlbumTable: React.FC<Props> = ({ arr }) => {
  const [value, setValue] = useState("");

  const [albumVisible, setAlbumVisible] = useState(false);

  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            <Button onClick={() => setAlbumVisible(true)}>
              Добавить альбом
            </Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Название</Th>
              <Th>Дата Релиза</Th>
              <Th>Стиль музыки</Th>
              <Th>Описание</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Album) => (
              <Tr>
                <Td width={"20%"}>{itm.album_name}</Td>
                <Td width={"10%"}>{itm.release_year}</Td>
                <Td width={"10%"}>{itm["music_style.style_name"]}</Td>
                <Td width={"60%"}>
                  <Text noOfLines={3}>{itm.description}</Text>
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
      <CreateAlbum
        isOpen={albumVisible}
        onClose={() => setAlbumVisible(false)}
      />
    </Box>
  );
};
