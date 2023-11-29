import { $authHost } from "./index";

export const createPr = async (params: any) => {
  const { data } = await $authHost.post("api/pr", params);
  return data;
};

//ID - album and other
export const fetchPrs = async (id: any) => {
  const { data } = await $authHost.get("api/pr/" + id);
  return data;
};

export const destroyPr = async (id: any) => {
  await $authHost.delete("api/pr", { data: id });
};

export const updatePr = async (id: any, param: any) => {
  await $authHost.put("api/pr/update/" + id, param);
};
