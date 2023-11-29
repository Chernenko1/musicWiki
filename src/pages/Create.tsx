import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CreateGroup } from "../components/modals/CreateGroup";
import { fetchGroups } from "../http/groupAPI";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setGroups, setMusicStyle } from "../store/slices/groupSlice";
import { fetchMusicS } from "../http/musicStyleAPI";
import { CreateCity } from "../components/modals/CreateCity";
import { CreateMusicStyle } from "../components/modals/CreateMStyle";
import { CreateRole } from "../components/modals/CreateRole";

export const Create = () => {
  const [groupVisible, setGroupVisible] = useState(false);
  const [cityVisible, setcityVisible] = useState(false);
  const [roleVisible, setRoleVisible] = useState(false);
  const [msVisible, setmsVisible] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGroups().then((data) => {
      dispatch(setGroups(data.groups.rows));
    });
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
          onClick={() => setcityVisible(true)}
        >
          <Text className="">Создать новый город</Text>
        </Box>
        <Box
          display={"flex"}
          bg={"lightgray"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={10}
          cursor={"pointer"}
          onClick={() => setRoleVisible(true)}
        >
          <Text className="">Создать новую роль</Text>
        </Box>
        <Box
          display={"flex"}
          bg={"lightgray"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={10}
          cursor={"pointer"}
          onClick={() => setmsVisible(true)}
        >
          <Text className="">Создать новый музыкальный стиль</Text>
        </Box>
      </Flex>
      <CreateGroup
        isOpen={groupVisible}
        onClose={() => setGroupVisible(false)}
      />
      <CreateCity isOpen={cityVisible} onClose={() => setcityVisible(false)} />
      <CreateMusicStyle
        isOpen={msVisible}
        onClose={() => setmsVisible(false)}
      />
      <CreateRole isOpen={roleVisible} onClose={() => setRoleVisible(false)} />
    </Container>
  );
};
