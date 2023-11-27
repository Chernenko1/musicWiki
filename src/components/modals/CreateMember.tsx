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
import React, { useState } from "react";
import { createAlbums } from "../../http/albumAPI";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createRole } from "../../http/roleAPI";
import { createBandMember } from "../../http/bandMembers";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateMember: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useAppDispatch();

  const [groupId, setGroupId] = useState("");
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const { groupsData, musicStyleData, roles } = useAppSelector(
    (state) => state.groups
  );

  const addData = () => {
    createBandMember({
      group_id: groupId,
      first_name: firstName,
      last_name: lastName,
      biography: description,
      role_id: role,
    }).then((data) => {
      setGroupId("");
      setFirstName("");
      setLastName("");
      setRole("");
      setDescription("");
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
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Фамилия</FormLabel>
              <Input
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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

            <Select
              placeholder="Роль"
              mt={4}
              onChange={(e) => setRole(e.target.value)}
            >
              {roles.map((itm: any) => (
                <option value={itm.id} key={itm.id}>
                  {itm.role_name}
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
