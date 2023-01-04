import { CssBaseline, ScopedCssBaseline, Stack } from "@mui/material";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { AddNewOrderModal } from "../components/AddNewOrderModal";
import { OrderCard } from "../components/OrderCard";
import { AddNewOrderButton } from "./styles";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="App" >
      <Stack alignItems='center' marginTop='5rem' flex='1' gap='2rem'>
        <OrderCard />
      </Stack>

      <AddNewOrderButton onClick={() => setIsModalOpen(true)}>
        <Plus size={45} weight={"bold"} className='NewOrderIcon' />
      </AddNewOrderButton>
      <AddNewOrderModal open={isModalOpen} handleCloseModal={() => setIsModalOpen(false)} />
    </div>
  )
}
