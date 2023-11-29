import { $authHost } from "./index";

export const createConcTickets = async (params: any) => {
  const { data } = await $authHost.post("api/concTickets", params);
  return data;
};

//ID - album and other
export const fetchConcTicketss = async () => {
  const { data } = await $authHost.get("api/concTickets");
  return data;
};

export const destroyConcTickets = async (id: any) => {
  await $authHost.delete("api/concTickets", { data: id });
};

export const updateConcTickets = async (id: any, param: any) => {
  await $authHost.put("api/tickets/update/" + id, param);
};
