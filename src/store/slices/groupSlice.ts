import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GroupsState {
  groupsData: [];
  musicStyleData: MusicStyles[];
  roles: Roles[];
  cities: City[];
  bandMembers: [];
  albums: [];
  songs: [];
  images: [];
  videos: [];
  concerts: [];
  conscertTickets: [];
  awards: [];
  labels: [];
  preassReleases: [];
}

const initialState: GroupsState = {
  groupsData: [],
  musicStyleData: [],
  roles: [],
  cities: [],
  bandMembers: [],
  albums: [],
  songs: [],
  images: [],
  videos: [],
  concerts: [],
  conscertTickets: [],
  awards: [],
  labels: [],
  preassReleases: [],
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
    setRoles(state, action) {
      state.roles = action.payload;
    },
    setCities(state, action) {
      console.log(123);
      state.cities = action.payload;
    },
    setBandMembers(state, action) {
      state.bandMembers = action.payload;
    },
    setAlbums(state, action) {
      state.albums = action.payload;
    },
    setSongs(state, action) {
      state.songs = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setVideos(state, action) {
      state.videos = action.payload;
    },
    setConcerts(state, action) {
      state.concerts = action.payload;
    },
    setConcertsTickets(state, action) {
      state.conscertTickets = action.payload;
    },
    setAwards(state, action) {
      state.awards = action.payload;
    },
    setLabels(state, action) {
      state.labels = action.payload;
    },
    setPR(state, action) {
      state.preassReleases = action.payload;
    },
  },
});

export const {
  setGroups,
  setMusicStyle,
  setAlbums,
  setAwards,
  setBandMembers,
  setCities,
  setConcerts,
  setConcertsTickets,
  setImages,
  setLabels,
  setPR,
  setRoles,
  setSongs,
  setVideos,
} = groupsSlice.actions;

export const selectGroup = (state: RootState) => state.groups;

export default groupsSlice.reducer;
