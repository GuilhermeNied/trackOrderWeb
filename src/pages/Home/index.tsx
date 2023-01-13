import { Stack } from "@mui/material";
import { Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderCard } from "../../components/OrderCard";
import { EditOrderModal } from "../../components/OrderModal/components/EditOrderModal";
import { AddNewOrderModal } from "../../components/OrderModal/components/NewOrderModal";
import { OrdersContext } from "../../contexts/OrdersContext";
import { Order } from "../../reducers/orders/reducer";
import { findOrderByTrackingCode } from "../../services/findOrderByTrackingCodeService";
import { getAllOrders } from "../../services/getAllOrdersService";
import { AddNewOrderButton, OrdersContainer } from "./styles";


export function Home() {
  const { openNewOrderModal, openEditOrderModal } = useContext(OrdersContext)

  const [orders, setOrders] = useState<Order[]>([])
  const [order, setOrder] = useState<Order>({ trackingCode: '', title: '', description: '' })


  function editOrder(trackingCode: string) {
    openEditOrderModal(true)
    findOrderByTrackingCode(trackingCode).then(data => {
      setOrder({
        trackingCode: data.data.trackingCode,
        title: data.data.title,
        description: data.data.description
      })
    })
  }

  function handleOpenNewOrderModal() {
    openNewOrderModal(true)
  }

  useEffect(() => {
    getAllOrders().then(data => {
      setOrders(data)
    })
  }, [])

  return (
    <Stack>
      <OrdersContainer>
        {orders.map((order) => (
          <OrderCard
            key={order.trackingCode}
            trackingCode={order.trackingCode}
            title={order.title}
            description={order.description}
            editOrder={() => editOrder(order.trackingCode)}
          />
        ))}
      </OrdersContainer>
      <AddNewOrderButton onClick={handleOpenNewOrderModal}>
        <Plus size={45} weight={"bold"} className='NewOrderIcon' />
      </AddNewOrderButton>

      <AddNewOrderModal />

      <EditOrderModal
        trackingCode={order.trackingCode}
        title={order.title}
        description={order.description}
      />
    </Stack>
  )
}
