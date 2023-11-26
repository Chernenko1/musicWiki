import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./gp.module.css";
import { Box, Image, Text } from "@chakra-ui/react";
import { fetchOneGroup } from "../http/groupAPI";
import { fetchAlbums } from "../http/albumAPI";
import { AlbumTable } from "../components/Tables/AlbumTables";
import { fetchBandMembers } from "../http/bandMembers";
import { MembersTable } from "../components/Tables/MembersTabel";
import { fetchCitys } from "../http/cityAPI";
import { fetchRoles } from "../http/roleAPI";
import { ConcertsTable } from "../components/Tables/ConcertsTable";
import { fetchConcerts } from "../http/concertAPI";

export const GroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState({ group_name: "", description: "" });
  const [albums, setAlbums] = useState<Album[]>([]);
  const [members, setMembers] = useState<BandMember[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [conserts, setConcerts] = useState<Concert[]>([]);

  useEffect(() => {
    fetchOneGroup(id).then((data) => setGroup(data.group));
    fetchAlbums(id).then((data: any) => setAlbums(data.album));
    fetchBandMembers(id).then((data: any) => setMembers(data.bandMember));
    fetchCitys().then((data: any) => setCities(data.city));
    fetchConcerts(id).then((data: any) => setConcerts(data.data));
  }, []);

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
        <Box className={styles.g_table}>
          <AlbumTable arr={albums} />
          <MembersTable arr={members} />
          <ConcertsTable arr={conserts} />
        </Box>
      </Box>
    </Box>
  );
};
