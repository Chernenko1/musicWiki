import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./gp.module.css";
import { Box, Image, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { GroupTable } from "../components/GroupTable";
import { fetchOneGroup } from "../http/groupAPI";
import { setGroup } from "../store/slices/groupSlice";

export const GroupPage = () => {
  const { id } = useParams();
  const { group } = useAppSelector((state) => state.groups.groupData);
  const dispatch = useAppDispatch();
  // const [group, setGroup] = useState({info:[]})

  useEffect(() => {
    fetchOneGroup(id).then((data) => dispatch(setGroup(data)));
  }, []);

  console.log(group);
  return (
    <Box className={styles.container}>
      <Box style={{}}>
        <Box className={styles.info}>
          <Box className={styles.g_img}>
            <Image
              src="https://sun9-25.userapi.com/impg/l_2W4v3RtcTnSNn_z29FXRzTOCYK8XwUXyqThw/y3zdK7Fnq3M.jpg?size=832x1000&quality=96&sign=1b7f71aa4baff6fa82a0cbf1c191a462&c_uniq_tag=1OEIZtg9A5AosB3M3NSEjyIhy41OenVly1ihOXYJcd8&type=album"
              alt={group.group_name}
              boxSize="400px"
            />
          </Box>
          <Box className={styles.g_desc}>
            <Text>{group.description}</Text>
          </Box>
        </Box>
        {/* <Box className={styles.g_table}>
          <GroupTable obj={group.bandmembersData[0]} />
        </Box> */}
      </Box>
    </Box>
  );
};
