import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CreateGroup } from "../components/modals/CreateGroup";
import { CreateAlbum } from "../components/modals/CreateAlbum";
import { fetchGroups } from "../http/groupAPI";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setGroups, setMusicStyle } from "../store/slices/groupSlice";
import { fetchMusicS } from "../http/musicStyleAPI";

export const Create = () => {
  const [groupVisible, setGroupVisible] = useState(false);
  const [albumVisible, setAlbumVisible] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGroups().then((data) => {
      dispatch(setGroups(data.groups.rows));
    });
    fetchMusicS().then((data) => dispatch(setMusicStyle(data.musicStyle)));
  }, []);

  return (
    <Container>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Box
          display={"flex"}
          bg={"lightgray"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={10}
          cursor={"pointer"}
          onClick={() => setGroupVisible(true)}
        >
          <Text>Создать новую группу</Text>
        </Box>
        <Spacer />
        <Box
          display={"flex"}
          bg={"lightgray"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={10}
          cursor={"pointer"}
          onClick={() => setAlbumVisible(true)}
        >
          <Text className="">Создать новый альбом</Text>
        </Box>
      </Flex>
      <CreateGroup
        isOpen={groupVisible}
        onClose={() => setGroupVisible(false)}
      />
      <CreateAlbum
        isOpen={albumVisible}
        onClose={() => setAlbumVisible(false)}
      />
    </Container>
  );
};
