import { $authHost } from "./index";

export const createBandMember = async (params: any) => {
  const { data } = await $authHost.post("api/bmember", params);
  return data;
};

//ID - album and other
export const fetchBandMembers = async (id: any) => {
  const { data } = await $authHost.get("api/bmember/" + id);
  return data;
};

export const destroyBandMember = async (id: any) => {
  await $authHost.delete("api/bmember", { data: id });
};

export const updateBandMember = async (id: any, param: any) => {
  await $authHost.put("api/award/update/" + id, param);
};
