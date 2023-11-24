import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GroupsState {
  groupsData: [];
  musicStyleData: [];
}

const initialState: GroupsState = {
  groupsData: [],
  musicStyleData: [],
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroups(state, action) {
      state.groupsData = action.payload;
    },
    setMusicStyle(state, action) {
      state.musicStyleData = action.payload;
    },
  },
});

export const { setGroups, setMusicStyle } = groupsSlice.actions;

export const selectGroup = (state: RootState) => state.groups;

export default groupsSlice.reducer;
