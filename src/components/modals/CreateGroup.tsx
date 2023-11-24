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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createGroup } from "../../http/groupAPI";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMusicS } from "../../http/musicStyleAPI";
import { setMusicStyle } from "../../store/slices/groupSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateGroup: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [createYear, setCreateYear] = useState(0);
  const [musicStyle, setMusicStyl] = useState("");
  const [city, setCity] = useState("");

  const musicS = useAppSelector((state) => state.groups.musicStyleData);

  const addGroup = () => {
    createGroup({
      group_name: groupName,
      creation_year: createYear,
      description: description,
      music_style_id: +musicStyle,
      city_id: +city,
    }).then((data) => {
      setGroupName("");
      setCity("");
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
          <ModalHeader>Создание новой группы</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Название группы</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Название группы"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Год создания</FormLabel>
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

            <RadioGroup onChange={setMusicStyl} value={musicStyle} mt={4}>
              <Stack direction="column">
                {musicS.map((itm: any) => (
                  <Radio value={String(itm.id)}>{itm.style_name}</Radio>
                ))}
              </Stack>
            </RadioGroup>

            <RadioGroup onChange={setCity} value={city} mt={4}>
              <Stack direction="column">
                <Radio value="1">Лондон</Radio>
                <Radio value="2">Ливерпуль</Radio>
                <Radio value="3">Сан-Франциско</Radio>
                <Radio value="4">Нью-Йорк</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addGroup}>
              Сохранить
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
