import { $authHost } from "./index";

export const createLabels = async (params: any) => {
  const { data } = await $authHost.post("api/labels", params);
  return data;
};

//ID - album and other
export const fetchLabelss = async () => {
  const { data } = await $authHost.get("api/labels");
  return data;
};

export const destroyLabels = async (id: any) => {
  await $authHost.delete("api/labels/update/", { data: id });
};
