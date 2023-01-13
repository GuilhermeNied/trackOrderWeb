import { Order } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ORDER = "ADD_NEW_ORDER",
  UPDATE_ORDER = "UPDATE_ORDER",
  DELETE_ORDER = "DELETE_ORDER",
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export function addNewOrderAction(order: Order) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      order,
    },
  };
}

export function updateOrderAction(order: Order) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: {
      order,
    },
  };
}

export function deleteOrderAction(order: Order) {
  return {
    type: ActionTypes.DELETE_ORDER,
    payload: {
      order,
    },
  };
}

export function openModalAction() {
  return {
    type: ActionTypes.OPEN_MODAL,
  };
}

export function closeModalAction() {
  return {
    type: ActionTypes.CLOSE_MODAL,
  };
}
