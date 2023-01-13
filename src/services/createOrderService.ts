import { Order } from "../reducers/orders/reducer";
import { api } from "./api";

export async function createOrder({ trackingCode, title, description }: Order) {
  await api.post("/createOrder", {
    trackingCode,
    title,
    description,
  });
}
