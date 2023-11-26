import { $authHost } from "./index";

export const createCity = async (params: any) => {
  const { data } = await $authHost.post("api/city", params);
  return data;
};

//ID - album and other
export const fetchCitys = async () => {
  const { data } = await $authHost.get("api/city");
  return data;
};

export const destroyCity = async (id: any) => {
  await $authHost.delete("api/city", { data: id });
};