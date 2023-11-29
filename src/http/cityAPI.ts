import { $authHost } from "./index";

export const createCity = async (params: any) => {
  const { data } = await $authHost.post("api/city", params);
  return data;
};

//ID - album and other
export const fetchCities = async () => {
  const { data } = await $authHost.get("api/city");
  return data;
};

export const destroyCity = async (id: any) => {
  await $authHost.delete("api/city", { data: id });
};

export const updateCity = async (id: any, param: any) => {
  await $authHost.put("api/award/update/" + id, param);
};
