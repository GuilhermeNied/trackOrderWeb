import { Stack } from "@mui/material";
import { Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { AddNewOrderModal, ModalType } from "../components/AddNewOrderModal";
import { OrderCard } from "../components/OrderCard";
import { AddNewOrderButton } from "./styles";

interface Order {
  trackingCode: string
  title: string
  description: string
}

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    api.get(`/orders`).then((res) => {
      setOrders(res.data)
    })
  }, [orders])

  return (
    <div className="App" >
      <Stack alignItems='center' marginTop='5rem' flex='1' gap='2rem'>
        {orders.map((order) => (
          <OrderCard
            key={order.trackingCode}
            trackingCode={order.trackingCode}
            title={order.title}
            description={order.description}
          />
        ))}
      </Stack>

      <AddNewOrderButton onClick={() => setIsModalOpen(true)}>
        <Plus size={45} weight={"bold"} className='NewOrderIcon' />
      </AddNewOrderButton>
      <AddNewOrderModal type={ModalType.EDIT} open={isModalOpen} handleCloseModal={() => setIsModalOpen(false)} />
    </div>
  )
}
