import { $authHost } from "./index";

export const createConcert = async (params: any) => {
  const { data } = await $authHost.post("api/concert", params);
  return data;
};

//ID - album and other
export const fetchConcerts = async (id: any) => {
  const { data } = await $authHost.get("api/concert/" + id);
  return data;
};

export const destroyConcert = async (id: any) => {
  await $authHost.delete("api/concert", { data: id });
};

export const updateConcert = async (id: any, param: any) => {
  await $authHost.put("api/concert/update/" + id, param);
};
