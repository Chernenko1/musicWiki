import { $authHost } from "./index";

export const createImage = async (params: any) => {
  const { data } = await $authHost.post("api/image", params);
  return data;
};

//ID - album and other
export const fetchImages = async () => {
  const { data } = await $authHost.get("api/image");
  return data;
};

export const destroyImage = async (id: any) => {
  await $authHost.delete("api/image/update/", { data: id });
};
