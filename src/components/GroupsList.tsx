import React, { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { GroupItem } from "./GroupItem";

interface Props {
  onChildeClick: any;
}

export const GroupsList: React.FC<Props> = ({ onChildeClick }) => {
  const groups = useAppSelector((state) => state.groups.groupsData);
  // const dispatch = useAppDispatch();

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
            onChildeClick={onChildeClick}
          />
        </div>
      ))}
    </div>
  );
};
