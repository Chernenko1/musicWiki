import React from "react";
import { useAppSelector } from "../store/hooks";
import { GroupItem } from "./GroupItem";
import { wrap } from "module";

export const GroupsList = () => {
  const groups = useAppSelector((state) => state.groups.groupsData);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        rowGap: 10,
        columnGap: 10,
        padding: 15,
      }}
    >
      {groups.map((itm) => (
        <GroupItem
          id={itm.id}
          describe={itm.description}
          title={itm.group_name}
          image=""
        />
      ))}
    </div>
  );
};
