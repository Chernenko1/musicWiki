import { $authHost } from "./index";

export const createRole = async (params: any) => {
  const { data } = await $authHost.post("api/role", params);
  return data;
};

//ID - album and other
export const fetchRoles = async () => {
  const { data } = await $authHost.get("api/role");
  return data;
};

export const destroyRole = async (id: any) => {
  await $authHost.delete("api/role", { data: id });
};
