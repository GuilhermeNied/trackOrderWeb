import { Stack } from "@mui/material";
import { Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderCard } from "../../components/OrderCard";
import { EditOrderModal } from "../../components/OrderModal/components/EditOrderModal";
import { AddNewOrderModal } from "../../components/OrderModal/components/NewOrderModal";
import { OrdersContext } from "../../contexts/OrdersContext";
import { useOrders } from "../../hooks/useOrders";
import { Order } from "../../reducers/orders/reducer";
import { findOrderByTrackingCode } from "../../services/findOrderByTrackingCodeService";
import { getAllOrders } from "../../services/getAllOrdersService";
import { AddNewOrderButton, HomeContainer, OrdersContainer } from "./styles";


export function Home() {
  const { openNewOrderModal, openEditOrderModal } = useContext(OrdersContext)
  const [order, setOrder] = useState<Order>({ trackingCode: '', title: '', description: '' })
  const { orders } = useOrders()


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



  return (
    <HomeContainer>
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
    </HomeContainer>
  )
}
