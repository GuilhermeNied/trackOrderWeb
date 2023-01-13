import { api } from "./api";

export async function deleteOrderByTrackingCode(trackingCode: string) {
  await api.delete(`/deleteOrder/${trackingCode}`, {
    params: {
      trackingCode,
    },
  });
}
