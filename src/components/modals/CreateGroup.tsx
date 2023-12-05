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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { createGroup } from "../../http/groupAPI";
import { setMusicStyle } from "../../store/slices/groupSlice";
import { useAppSelector } from "../../store/hooks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateGroup: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [createYear, setCreateYear] = useState("");
  const [musicStyle, setMusicStyl] = useState("");
  const [image, setImage] = useState<any>();
  const [city, setCity] = useState("");

  const { musicStyleData, cities } = useAppSelector((state) => state.groups);

  const addGroup = () => {
    const formData = new FormData();
    formData.append("group_name", groupName);
    formData.append("creation_year", createYear);
    formData.append("description", description);
    formData.append("music_style_id", musicStyle);
    formData.append("city_id", city);
    formData.append("image", image);
    createGroup(formData).then((data) => {
      setGroupName("");
      setCity("");
      setCreateYear("");
      setDescription("");
      setMusicStyle("");
      setImage("");
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
                onChange={(e) => setCreateYear(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Изображение</FormLabel>
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setImage(e.target.files?.[0])
                }
                type="file"
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
              placeholder="Стиль музыки"
              mt={4}
              onChange={(e) => setMusicStyl(e.target.value)}
            >
              {musicStyleData.map((itm: any) => (
                <option value={itm.id}>{itm.style_name}</option>
              ))}
            </Select>

            <Select
              placeholder="Город"
              mt={4}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((itm: any) => (
                <option value={itm.id}>{itm.city_name}</option>
              ))}
            </Select>
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
