import { $authHost } from "./index";

export const createAward = async (params: any) => {
  const { data } = await $authHost.post("api/award", params);
  return data;
};

//ID - album and other
export const fetchAwards = async () => {
  const { data } = await $authHost.get("api/award");
  return data;
};

export const destroyAward = async (id: any) => {
  await $authHost.delete("api/award", { data: id });
};
