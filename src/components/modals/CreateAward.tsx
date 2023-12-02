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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { createAward } from "../../http/awardsAPI";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateAward: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [groupId, setGroupId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const { groupsData } = useAppSelector((state) => state.groups);

  const addData = () => {
    createAward({
      group_id: groupId,
      award_name: name,
      date,
    }).then((data) => {
      setGroupId("");
      setName("");
      setDate("");
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
          <ModalHeader>Добавление награду</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Название</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Дата</FormLabel>
              <Input
                placeholder="Дата"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </FormControl>

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
