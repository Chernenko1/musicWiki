import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createAlbums } from "../../http/albumAPI";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setMusicStyle } from "../../store/slices/groupSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateAlbum: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useAppDispatch();

  const [groupId, setGroupId] = useState("");
  const [description, setDescription] = useState("");
  const [createYear, setCreateYear] = useState(0);
  const [musicStyle, setMusicStyl] = useState("");
  const [sales_copies, setSales] = useState(0);
  const [name, setName] = useState("");

  const { groupsData, musicStyleData } = useAppSelector(
    (state) => state.groups
  );

  const addData = () => {
    createAlbums({
      group_id: groupId,
      album_name: name,
      release_year: createYear,
      description: description,
      music_style_id: +musicStyle,
      album_sales: sales_copies,
      image_id: 1,
    }).then((data) => {
      setGroupId("");
      setName("");
      setSales(0);
      setCreateYear(0);
      setDescription("");
      setMusicStyle("");
      onClose();
    });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создание нового альбома</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Название альбома</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Название группы"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Год релиза</FormLabel>
              <Input
                placeholder="Год создания"
                value={createYear}
                onChange={(e) => setCreateYear(+e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Описание</FormLabel>
              <Input
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Количество продаж</FormLabel>
              <Input
                placeholder="Количество продаж"
                value={sales_copies}
                onChange={(e) => setSales(+e.target.value)}
              />
            </FormControl>

            <Select
              placeholder="Стиль музыки"
              mt={4}
              onChange={(e) => setMusicStyl(e.target.value)}
            >
              {musicStyleData.map((itm: any) => (
                <option value={itm.id}>{itm.style_name}</option>
              ))}
            </Select>

            <Select
              placeholder="Группа"
              mt={4}
              onChange={(e) => setGroupId(e.target.value)}
            >
              {groupsData.map((itm: any) => (
                <option value={itm.id}>{itm.group_name}</option>
              ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addData}>
              Сохранить
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
