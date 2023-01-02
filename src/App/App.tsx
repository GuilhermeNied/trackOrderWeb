import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { AddNewOrderModal } from "../components/AddNewOrderModal";
import { AddNewOrderButton } from "./styles";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="App">
      <ScopedCssBaseline>
        <AddNewOrderButton onClick={() => setIsModalOpen(true)}>
          <Plus size={45} weight={"bold"} />
        </AddNewOrderButton>
        <AddNewOrderModal open={isModalOpen} handleCloseModal={() => setIsModalOpen(false)} />
      </ScopedCssBaseline>
    </div>
  )
}
