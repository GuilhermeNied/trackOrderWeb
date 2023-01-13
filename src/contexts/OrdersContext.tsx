import { createContext, ReactNode, useReducer } from "react";
import {
  openNewOrderModalAction,
  closeNewOrderModalAction,
  openEditOrderModalAction,
  closeEditOrderAction,
} from "../reducers/orders/actions";
import { ordersReduer } from "../reducers/orders/reducer";


interface OrdersContextType {
  openNewOrderModal: (isOpen: boolean) => void;
  closeNewOrderModal: (isOpen: boolean) => void;
  openEditOrderModal: (openis: boolean) => void;
  closeEditOrderModal: (openis: boolean) => void;
  isNewOrderModalOpen: boolean;
  isEditOrderModalOpen: boolean;
  trackingCode: string;
  title: string;
  description: string
}

interface OrderContextProviderProps {
  children: ReactNode
}


export const OrdersContext = createContext({} as OrdersContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [ordersState, dispatch] = useReducer(ordersReduer, {
    trackingCode: '',
    title: '',
    description: '',
    isOpenNoewOrderModal: false,
    isEditOrderModalOpen: false
  })
  const { isNewOrderModalOpen, isEditOrderModalOpen, trackingCode, title, description } = ordersState

  function openNewOrderModal() {
    dispatch(openNewOrderModalAction(isNewOrderModalOpen))
  }

  function closeNewOrderModal() {
    dispatch(closeNewOrderModalAction(isNewOrderModalOpen))
  }

  function openEditOrderModal() {
    dispatch(openEditOrderModalAction(isEditOrderModalOpen))
  }

  function closeEditOrderModal() {
    dispatch(closeEditOrderAction(isEditOrderModalOpen))
  }


  //Tudo que é passado no value é o que vou exportar do context
  return (
    <OrdersContext.Provider
      value={{
        openNewOrderModal,
        closeNewOrderModal,
        openEditOrderModal,
        closeEditOrderModal,
        isNewOrderModalOpen,
        isEditOrderModalOpen,
        trackingCode,
        title,
        description
      }}

    >
      {children}
    </OrdersContext.Provider>
  )
}