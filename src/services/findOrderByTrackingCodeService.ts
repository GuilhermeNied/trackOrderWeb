import { Order } from "../App/App";
import { api } from "./api";

export async function findOrderByTrackingCode(trackingCode: string) {
  const data = await api.get(`order/${trackingCode}`);

  return data;
}
