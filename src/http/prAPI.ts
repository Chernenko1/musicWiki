import { $authHost } from "./index";

export const createPr = async (params: any) => {
  const { data } = await $authHost.post("api/pr", params);
  return data;
};

//ID - album and other
export const fetchPrs = async () => {
  const { data } = await $authHost.get("api/pr");
  return data;
};

export const destroyPr = async (id: any) => {
  await $authHost.delete("api/pr", { data: id });
};
