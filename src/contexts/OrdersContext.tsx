import { createContext, ReactNode, useReducer, useState } from "react";
import { Order } from "../App/App";
import { closeModalAction, openModalAction } from "../reducers/orders/actions";
import { ordersReduer } from "../reducers/orders/reducer";


interface OrderContextProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({})

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [ordersState, dispatch] = useReducer(ordersReduer, {
    trackingCode: '',
    title: '',
    description: '',
    isOpen: false
  })

  function handleOpenModal() {
    dispatch(openModalAction())
  }

  function handleCloseModal() {
    dispatch(closeModalAction())
  }

  //Tudo que é passado no value é o que vou exportar do context
  return (
    <OrdersContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal
      }}

    />
  )
}