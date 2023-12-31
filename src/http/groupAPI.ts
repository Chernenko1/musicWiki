import { $authHost } from "./index";

export const createGroup = async (group: any) => {
  const { data } = await $authHost.post("api/group", group);
  return data;
};

//ID - album and other
export const fetchGroups = async () => {
  const { data } = await $authHost.get("api/group");
  return data;
};

export const fetchOneGroup = async (id: any) => {
  const { data } = await $authHost.get("api/group/" + id);
  return data;
};

export const updateGroup = async (id: any, param: any) => {
  await $authHost.put("api/group/" + id, param);
};

export const destroyGroup = async (id: any) => {
  await $authHost.delete("api/group", { data: id });
};
