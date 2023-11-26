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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Props {
  arr: Song[];
}

export const SongTable: React.FC<Props> = ({ arr }) => {
  return (
    <Box>
      <TableContainer
        whiteSpace={"normal"}
        style={{ borderWidth: 1, borderColor: "black", marginBottom: 10 }}
      >
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Описание таблицы</TableCaption>
          <Thead>
            <Tr>
              <Th>Название</Th>
              <Th>Длительность</Th>
              <Th>Стиль музыки</Th>
              <Th>Текст</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arr.map((itm: Song) => (
              <Tr key={itm.id}>
                <Td width={"20%"}>{itm.song_name}</Td>
                <Td width={"10%"}>
                  {itm.duration.minutes + ":" + itm.duration.seconds}
                </Td>
                <Td width={"10%"}>{itm.music_style_id}</Td>
                <Td width={"60%"}>{itm.lyrics}</Td>
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
