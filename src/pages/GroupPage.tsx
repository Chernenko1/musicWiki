import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./gp.module.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { fetchGroups, fetchOneGroup } from "../http/groupAPI";
import { fetchAlbums } from "../http/albumAPI";
import { AlbumTable } from "../components/Tables/AlbumTables";
import { fetchBandMembers } from "../http/bandMembers";
import { MembersTable } from "../components/Tables/MembersTabel";
import { fetchCities } from "../http/cityAPI";
import { ConcertsTable } from "../components/Tables/ConcertsTable";
import { fetchConcerts } from "../http/concertAPI";
import { fetchSongs } from "../http/songAPI";
import { SongTable } from "../components/Tables/SongTable";
import { fetchPrs } from "../http/prAPI";
import { PressReleasesTable } from "../components/Tables/PressReleases";
import { fetchAwards } from "../http/awardsAPI";
import { AwardsTable } from "../components/Tables/AwardTable";
import { fetchMusicS } from "../http/musicStyleAPI";
import { useAppDispatch } from "../store/hooks";
import {
  setCities,
  setGroups,
  setMusicStyle,
  setRoles,
} from "../store/slices/groupSlice";
import { fetchRoles } from "../http/roleAPI";
import { GroupTable } from "../components/Tables/GroupTable";

export const GroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState<Group>({
    group_name: "",
    creation_year: 0,
    description: "",
  });
  const [albums, setAlbums] = useState<Album[]>([]);
  const [members, setMembers] = useState<BandMember[]>([]);
  const [conserts, setConcerts] = useState<Concert[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [pressR, setPressR] = useState<PR[]>([]);
  const [award, setAward] = useState<Award[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchOneGroup(id).then((data: any) => setGroup(data));
    fetchAlbums(id).then((data: any) => setAlbums(data.album));
    fetchBandMembers(id).then((data: any) => setMembers(data.bandMember));
    fetchRoles().then((data) => dispatch(setRoles(data)));
    fetchCities().then((data: any) => dispatch(setCities(data)));

    fetchConcerts(id).then((data: any) => setConcerts(data));
    fetchSongs(id).then((data: any) => setSongs(data.data));
    fetchPrs(id).then((data: any) => setPressR(data.data));
    fetchAwards(id).then((data: any) => setAward(data.data));
    fetchGroups().then((data) => {
      dispatch(setGroups(data.groups.rows));
    });
    fetchMusicS().then((data) => dispatch(setMusicStyle(data.musicStyle)));
  }, []);

  console.log(group);

  return (
    <Box className={styles.container}>
      <Box className={styles.g_table}>
        <GroupTable arr={group} />
        <AlbumTable arr={albums} />
        <MembersTable arr={members} />
        <ConcertsTable arr={conserts} />
        <SongTable arr={songs} />
        <PressReleasesTable arr={pressR} />
        <AwardsTable arr={award} />
      </Box>
    </Box>
  );
};
