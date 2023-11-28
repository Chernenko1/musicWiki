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

interface Props {
  arr: Album[];
  // ms: MusicStyles[];
}

export const AlbumTable: React.FC<Props> = ({ arr }) => {
  const [value, setValue] = useState("");

  const [albumVisible, setAlbumVisible] = useState(false);
  const [name, setName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");
  const [albumSales, setAlbumSales] = useState(0);
  const [music, setMusic] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const mus = useAppSelector((state) => state.groups.musicStyleData);

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
                  />
                </Td>
                <Td width={"10%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Editable defaultValue={String(itm.release_year)}>
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => {
                          setReleaseYear(e.target.value);
                        }}
                        onFocus={() => setActiveIndex(index)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updateAlbum(itm.id, { release_year: +releaseYear });
                        setReleaseYear("");
                      }}
                      style={{
                        display:
                          releaseYear.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
                </Td>
                <Td width={"10%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Editable defaultValue={String(itm.album_sales)}>
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => setAlbumSales(+e.target.value)}
                        width={"4em"}
                        onFocus={() => setActiveIndex(index)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updateAlbum(itm.id, { album_sales: albumSales });
                        setAlbumSales(0);
                      }}
                      style={{
                        display:
                          albumSales === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
                </Td>
                <Td width={"11%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    {
                      <Select
                        placeholder={itm["music_style.style_name"]}
                        onChange={(e) => {
                          setMusic(e.target.value);
                          setActiveIndex(index);
                        }}
                      >
                        {mus.map((itm) => (
                          <option value={itm.id}>{itm.style_name}</option>
                        ))}
                      </Select>
                    }
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updateAlbum(itm.id, { music_style_id: music });
                        setMusic("");
                      }}
                      style={{
                        display:
                          music.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
                </Td>
                <Td width={"50%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Editable defaultValue={itm.description}>
                      <EditablePreview />
                      <EditableTextarea
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        width={"45em"}
                        height={"10em"}
                        onFocus={() => setActiveIndex(index)}
                      />
                    </Editable>
                    <Button
                      size={"xs"}
                      p={0}
                      bgColor={"lightgreen"}
                      onClick={() => {
                        updateAlbum(itm.id, { description });
                        setDescription("");
                      }}
                      style={{
                        display:
                          description.length === 0 || activeIndex !== index
                            ? "none"
                            : "",
                      }}
                    >
                      <IoCheckmark size={10} />
                    </Button>
                  </Flex>
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
