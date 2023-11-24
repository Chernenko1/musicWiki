import React, { useEffect } from "react";
import { GroupsList } from "../components/GroupsList";
import { useAppDispatch } from "../store/hooks";
import { setGroups, setMusicStyle } from "../store/slices/groupSlice";
import { fetchGroups } from "../http/groupAPI";
import { fetchMusicS } from "../http/musicStyleAPI";

export const Admin = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGroups().then((data) => {
      dispatch(setGroups(data.groups.rows));
    });
    fetchMusicS().then((data) => dispatch(setMusicStyle(data.musicStyle)));
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <GroupsList />
      {/* <Pages /> */}
    </div>
  );
};
