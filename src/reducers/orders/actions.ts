import { Order } from "./reducer";

export enum ActionTypes {
  OPEN_NEW_ORDER_MODAL = "OPEN_NEW_ORDER_MODAL",
  CLOSE_NEW_ORDER_MODAL = "CLOSE_NEW_ORDER_MODAL",
  OPEN_EDIT_ORDER_MODAL = "OPEN_EDIT_ORDER_MODAL",
  CLOSE_EDIT_ORDER_MODAL = "CLOSE_EDIT_ORDER_MODAL",
}

export function openNewOrderModalAction(isOpen: boolean) {
  return {
    type: ActionTypes.OPEN_NEW_ORDER_MODAL,
    payload: {
      isOpen,
    },
  };
}

export function closeNewOrderModalAction(isOpen: boolean) {
  return {
    type: ActionTypes.CLOSE_NEW_ORDER_MODAL,
    payload: {
      isOpen,
    },
  };
}

export function openEditOrderModalAction(isOpen: boolean) {
  return {
    type: ActionTypes.OPEN_EDIT_ORDER_MODAL,
    payload: {
      isOpen,
    },
  };
}

export function closeEditOrderAction(isOpen: boolean) {
  return {
    type: ActionTypes.CLOSE_EDIT_ORDER_MODAL,
    payload: {
      isOpen,
    },
  };
}
