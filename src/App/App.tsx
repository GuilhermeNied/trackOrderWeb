import { Stack } from "@mui/material";
import { Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { AddNewOrderModal } from "../components/OrderModal/components/NewOrderModal";
import { OrderCard } from "../components/OrderCard";
import { AddNewOrderButton } from "./styles";
import { EditOrderModal } from "../components/OrderModal/components/EditOrderModal";
import { getAllOrders } from "../services/getAllOrdersService";
import { findOrderByTrackingCode } from "../services/findOrderByTrackingCodeService";

export interface Order {
  trackingCode: string
  title: string
  description: string
}

export function App() {
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false)
  const [isEditOrderModalOpen, setIsEditOrderModalOpen] = useState(false)

  const [orders, setOrders] = useState<Order[]>([])
  const [order, setOrder] = useState<Order>({ trackingCode: '', title: '', description: '' })


  function editOrder(trackingCode: string) {
    setIsEditOrderModalOpen(true)
    findOrderByTrackingCode(trackingCode).then(data => {
      setOrder({
        trackingCode: data.data.trackingCode,
        title: data.data.title,
        description: data.data.description
      })
    })


  }

  function handleOpenNewOrderModal() {
    setIsNewOrderModalOpen(true)
  }
  function handleCloseNewOrderModal() {
    setIsNewOrderModalOpen(false)
  }

  function handleCloseEditOrderModal() {
    setIsEditOrderModalOpen(false)
  }

  useEffect(() => {
    getAllOrders().then(data => {
      setOrders(data)
    })
  }, [])

  return (
    <div className="App" >
      <Stack alignItems='center' marginTop='5rem' flex='1' gap='2rem'>
        {orders.map((order) => (
          <OrderCard
            key={order.trackingCode}
            trackingCode={order.trackingCode}
            title={order.title}
            description={order.description}
            editOrder={() => editOrder(order.trackingCode)}
          />
        ))}
      </Stack>
      <AddNewOrderButton onClick={handleOpenNewOrderModal}>
        <Plus size={45} weight={"bold"} className='NewOrderIcon' />
      </AddNewOrderButton>

      <AddNewOrderModal
        open={isNewOrderModalOpen}
        handleCloseModal={handleCloseNewOrderModal}
      />

      <EditOrderModal
        open={isEditOrderModalOpen}
        handleCloseModal={handleCloseEditOrderModal}
        trackingCode={order.trackingCode}
        title={order.title}
        description={order.description}
      />
    </div>
  )
}
