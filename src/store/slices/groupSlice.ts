import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GroupsState {
  groupsData: [];
}

const initialState: GroupsState = {
  groupsData: [],
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroups(state, action) {
      state.groupsData = action.payload;
    },
  },
});

export const { setGroups } = groupsSlice.actions;

export const selectGroup = (state: RootState) => state.groups;

export default groupsSlice.reducer;
