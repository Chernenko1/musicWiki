import React, { useCallback, useEffect, useState } from "react";
import { GroupsList } from "../components/GroupsList";
import { useAppDispatch } from "../store/hooks";
import { setGroups } from "../store/slices/groupSlice";
import { fetchGroups } from "../http/groupAPI";

export const Admin = () => {
  const [render, setRender] = useState(0);

  const dispatch = useAppDispatch();

  const handleChildClick = () => {
    setRender((prev) => prev + 1);
  };

  useEffect(() => {
    fetchGroups().then((data) => {
      dispatch(setGroups(data.groups.rows));
    });
  }, [render]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <GroupsList onChildeClick={handleChildClick} />
      {/* <Pages /> */}
    </div>
  );
};
