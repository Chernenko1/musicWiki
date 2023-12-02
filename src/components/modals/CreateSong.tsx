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
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { createSong } from "../../http/songAPI";
import { fetchAllAlbums } from "../../http/albumAPI";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateSong: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [groupId, setGroupId] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);

  const { groupsData, musicStyleData } = useAppSelector(
    (state) => state.groups
  );

  useEffect(() => {
    fetchAllAlbums().then((data) => setAlbums(data));
  }, []);

  const addData = () => {
    createSong({
      group_id: groupId,
      song_name: name,
      lyrics: description,
      music_style_id: style,
      album_id: albumId,
    }).then((data) => {
      setGroupId("");
      setName("");
      setStyle("");
      setDescription("");
      setAlbumId("");
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
          <ModalHeader>Добавление участника</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Имя</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Описание</FormLabel>
              <Textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <Select
              placeholder="Стиль"
              mt={4}
              onChange={(e) => setStyle(e.target.value)}
            >
              {musicStyleData.map((itm: any) => (
                <option value={itm.id} key={itm.id}>
                  {itm.style_name}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Группа"
              mt={4}
              onChange={(e) => setGroupId(e.target.value)}
            >
              {groupsData.map((itm: any) => (
                <option value={itm.id} key={itm.id + "key"}>
                  {itm.group_name}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Альбом"
              mt={4}
              onChange={(e) => setAlbumId(e.target.value)}
            >
              {albums.map((itm: any) => (
                <option value={itm.id} key={itm.id + "key"}>
                  {itm.album_name}
                </option>
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
