import { api } from "./api";

export async function getAllOrders() {
  const response = await api.get("/orders");
  const data = response.data
  return data;
}
