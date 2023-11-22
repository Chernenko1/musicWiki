import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GroupsState {
  groupsData: any;
  groupData: any;
}

const initialState: GroupsState = {
  groupsData: [],
  groupData: [],
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroups(state, action) {
      state.groupsData = action.payload;
    },
    setGroup(state, action) {
      state.groupData = action.payload;
    },
  },
});

export const { setGroup, setGroups } = groupsSlice.actions;

export const selectGroup = (state: RootState) => state.groups;

export default groupsSlice.reducer;
