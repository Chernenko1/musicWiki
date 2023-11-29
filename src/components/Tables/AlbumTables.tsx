import {
  Box,
  Editable,
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
  Flex,
  Button,
  EditableTextarea,
  Select,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { updateAlbum } from "../../http/albumAPI";
import { CreateAlbum } from "../modals/CreateAlbum";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useAppSelector } from "../../store/hooks";
import { FormForTable } from "../FormForTable";
import { SelectedForTable } from "../SelectedForTable";

interface Props {
  arr: Album[];
  // ms: MusicStyles[];
}

export const AlbumTable: React.FC<Props> = ({ arr }) => {
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
              <Th>Проданные копии</Th>
              <Th>Стиль музыки</Th>
              <Th>Описание</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Album, index: number) => (
              <Tr>
                <Td width={"19%"}>
                  <FormForTable
                    item={itm.album_name}
                    id={itm.id}
                    update_col="album_name"
                    func={updateAlbum}
                  />
                </Td>
                <Td width={"10%"}>
                  <FormForTable
                    id={itm.id}
                    item={String(itm.release_year)}
                    update_col="release_year"
                    func={updateAlbum}
                  />
                </Td>
                <Td width={"10%"}>
                  <FormForTable
                    id={itm.id}
                    item={String(itm.album_sales)}
                    update_col="album_sales"
                    func={updateAlbum}
                  />
                </Td>
                <Td width={"11%"}>
                  <SelectedForTable
                    id={itm.id}
                    item={String(itm["music_style.style_name"])}
                    update_col="music_style_id"
                    func={updateAlbum}
                  />
                </Td>
                <Td width={"50%"}>
                  <FormForTable
                    id={itm.id}
                    item={String(itm.description)}
                    update_col="description"
                    func={updateAlbum}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Название</Th>
              <Th>Дата Релиза</Th>
              <Th>Проданные копии</Th>
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
