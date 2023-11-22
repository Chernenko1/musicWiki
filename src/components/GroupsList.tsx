import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { GroupItem } from "./GroupItem";
import { fetchGroups } from "../http/groupAPI";
import { setGroups } from "../store/slices/groupSlice";
import { Spinner } from "@chakra-ui/react";

export const GroupsList = () => {
  const groups = useAppSelector((state) => state.groups.groupsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGroups().then((data) => dispatch(setGroups(data.groups.rows)));
  }, []);

  // console.log(groups);
  // if (groups.length < 1) {
  //   console.log(1);
  //   return <Spinner />;
  // }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        rowGap: 10,
        columnGap: 15,
        padding: 10,
      }}
    >
      {groups.map((itm: any) => (
        <div key={itm.id} style={{ display: "flex" }}>
          <GroupItem
            id={itm.id}
            describe={itm.description}
            title={itm.group_name}
            image=""
          />
        </div>
      ))}
    </div>
  );
};
