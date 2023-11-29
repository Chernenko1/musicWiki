import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import { CreateSong } from "../modals/CreateSong";
import { FormForTable } from "../FormForTable";
import { destroySong, updateSong } from "../../http/songAPI";
import { SelectedForTable } from "../SelectedForTable";
import { IoTrashBinOutline } from "react-icons/io5";
import { useAppSelector } from "../../store/hooks";

interface Props {
  arr: Song[];
}

export const SongTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);
  const music = useAppSelector((state) => state.groups.musicStyleData);

  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            <Button onClick={() => setVisible(true)}>Добавить песню</Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Название</Th>
              <Th>Стиль музыки</Th>
              <Th>Текст</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Song) => (
              <Tr key={itm.id}>
                <Td width={"20%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.song_name}
                    update_col="song_name"
                    updateFunc={updateSong}
                    delFunc={destroySong}
                  />
                </Td>
                <Td width={"20%"}>
                  <SelectedForTable
                    id={itm.id}
                    item={String(itm["music_style.style_name"])}
                    update_col="music_style_id"
                    updateFunc={updateSong}
                  >
                    {music.map((item) => (
                      <option value={item.id}>{item.style_name}</option>
                    ))}
                  </SelectedForTable>
                </Td>
                <Td width={"60%"}>
                  <FormForTable
                    id={itm.id}
                    item={itm.lyrics}
                    update_col="lyrics"
                    updateFunc={updateSong}
                    style={{ width: "40em", height: "10em" }}
                  />
                </Td>
                <Td>
                  <Button
                    size={"xs"}
                    bgColor={"indianred"}
                    onClick={() => destroySong({ id: itm.id })}
                  >
                    <IoTrashBinOutline />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Название</Th>
              <Th>Стиль музыки</Th>
              <Th>Текст</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <CreateSong isOpen={visible} onClose={() => setVisible(false)} />
    </Box>
  );
};
