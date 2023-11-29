import { $authHost, $host } from "./index";

export const createAlbums = async (album: any) => {
  console.log(album);
  const { data } = await $authHost.post("api/albums", album);
  return data;
};

//ID - album and other
export const fetchAlbums = async (id: any) => {
  const { data } = await $authHost.get("api/albums/all/" + id);
  return data;
};

export const fetchAllAlbums = async () => {
  const { data } = await $authHost.get("api/albums/all");
  return data;
};

export const updateAlbum = async (id: any, param: any) => {
  await $authHost.put("api/albums/" + id, param);
};

export const destroyAlbum = async (id: any) => {
  await $authHost.delete("api/albums", { data: id });
};
