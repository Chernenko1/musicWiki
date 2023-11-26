import { $authHost } from "./index";

export const createSong = async (params: any) => {
  const { data } = await $authHost.post("api/song", params);
  return data;
};

//ID - album and other
export const fetchSongs = async (id: any) => {
  const { data } = await $authHost.get("api/song/" + id);
  return data;
};

export const destroySong = async (id: any) => {
  await $authHost.delete("api/song", { data: id });
};
