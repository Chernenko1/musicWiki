import { $authHost } from "./index";

export const createBandMember = async (params: any) => {
  const { data } = await $authHost.post("api/bandmember", params);
  return data;
};

//ID - album and other
export const fetchBandMembers = async () => {
  const { data } = await $authHost.get("api/bandmember");
  return data;
};

export const destroyBandMember = async (id: any) => {
  await $authHost.delete("api/bandmember", { data: id });
};
