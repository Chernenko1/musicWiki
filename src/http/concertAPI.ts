import { $authHost } from "./index";

export const createConcert = async (params: any) => {
  const { data } = await $authHost.post("api/concert", params);
  return data;
};

//ID - album and other
export const fetchConcerts = async () => {
  const { data } = await $authHost.get("api/concert");
  return data;
};

export const destroyConcert = async (id: any) => {
  await $authHost.delete("api/concert", { data: id });
};
