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
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createConcert } from "../../http/concertAPI";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateConcerts: React.FC<Props> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useAppDispatch();

  const [groupId, setGroupId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [concertDate, setConcertDate] = useState("");
  const [ticketsStartDate, setTicketsStartDate] = useState("");
  const [price, setPrice] = useState(0);
  const [soldTickets, setSoldTickets] = useState(0);

  const { groupsData, cities } = useAppSelector((state) => state.groups);

  const addData = () => {
    createConcert({
      group_id: groupId,
      concert_name: name,
      city_id: city,
      date: concertDate,
      sold_tickets: soldTickets,
      price,
      sale_date: ticketsStartDate,
    }).then((data) => {
      setGroupId("");
      setName("");
      setPrice(0);
      setCity("");
      setConcertDate("");
      setSoldTickets(0);
      setTicketsStartDate("");
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
          <ModalHeader>Добавление концерт</ModalHeader>
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
                value={concertDate}
                onChange={(e) => setConcertDate(e.target.value)}
                type="date"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Цена билета</FormLabel>
              <Input
                placeholder="Цена билета"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Дата продаж</FormLabel>
              <Input
                placeholder="Дата продаж"
                value={ticketsStartDate}
                onChange={(e) => setTicketsStartDate(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Проданные билета</FormLabel>
              <Input
                placeholder="Проданные билета"
                value={soldTickets}
                onChange={(e) => setSoldTickets(+e.target.value)}
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

            <Select
              placeholder="Город"
              mt={4}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((itm: any) => (
                <option value={itm.id} key={itm.id + "key"}>
                  {itm.city_name}
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
