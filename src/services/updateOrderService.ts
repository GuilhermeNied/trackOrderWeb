import { Order } from "../reducers/orders/reducer";
import { api } from "./api";

export async function updateOrder({ trackingCode, title, description }: Order) {
  await api({
    method: "PUT",
    url: `/updateOrder/${trackingCode}`,
    data: {
      title,
      description,
    },
    params: {
      trackingCode,
    },
  });
}
