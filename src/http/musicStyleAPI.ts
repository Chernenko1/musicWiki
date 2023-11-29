import { $authHost } from "./index";

export const createMusicS = async (group: any) => {
  const { data } = await $authHost.post("api/musicstyle", group);
  return data;
};

//ID - album and other
export const fetchMusicS = async () => {
  const { data } = await $authHost.get("api/musicstyle");
  return data;
};

export const destroyMusicS = async (id: any) => {
  await $authHost.delete("api/musicStyle", { data: id });
};
