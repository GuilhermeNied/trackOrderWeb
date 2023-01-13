import { api } from "./api";

export async function getAllOrders() {
  const data = await api.get("/orders").then((res) => res.data);
  return data;
}
