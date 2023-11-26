import { $authHost } from "./index";

export const createVideo = async (params: any) => {
  const { data } = await $authHost.post("api/video", params);
  return data;
};

//ID - album and other
export const fetchVideos = async () => {
  const { data } = await $authHost.get("api/video");
  return data;
};

export const destroyVideo = async (id: any) => {
  await $authHost.delete("api/video", { data: id });
};
