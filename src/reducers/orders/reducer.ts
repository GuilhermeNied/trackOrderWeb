import { ActionTypes } from "./actions";

export interface Order {
  trackingCode: string;
  title: string;
  description: string;
}

export function ordersReduer(state: any, action: any) {
  switch (action.type) {
    case ActionTypes.OPEN_NEW_ORDER_MODAL:
      return {
        ...state,
        isNewOrderModalOpen: true,
      };

    case ActionTypes.CLOSE_NEW_ORDER_MODAL:
      return {
        ...state,
        isNewOrderModalOpen: false,
      };

    case ActionTypes.OPEN_EDIT_ORDER_MODAL:
      return {
        ...state,
        isEditOrderModalOpen: true,
      };

    case ActionTypes.CLOSE_EDIT_ORDER_MODAL:
      return {
        ...state,
        isEditOrderModalOpen: false,
      };
    default:
      return state;
  }
}
