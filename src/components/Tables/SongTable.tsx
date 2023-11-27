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

interface Props {
  arr: Song[];
}

export const SongTable: React.FC<Props> = ({ arr }) => {
  const [visible, setVisible] = useState(false);

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
                <Td width={"20%"}>{itm.song_name}</Td>
                <Td width={"20%"}>{itm["music_style.style_name"]}</Td>
                <Td width={"60%"}>{itm.lyrics}</Td>
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
