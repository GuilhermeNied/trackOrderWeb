import { useEffect, useState } from "react";
import { Order } from "../reducers/orders/reducer";
import { getAllOrders } from "../services/getAllOrdersService";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])

  async function fetchAllOrders() {
    const res = await getAllOrders()    
    setOrders(res)
  }

  useEffect(() => {
    try {
      fetchAllOrders()

    } catch (error) {
      console.log(error);

    }
  }, [])


  return { orders }
}