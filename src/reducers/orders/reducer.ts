import { ActionTypes } from "./actions";

export interface Order {
  trackingCode: string;
  title: string;
  description: string;
}

export function ordersReduer(state: any, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER:
      return {
        ...state,
        trackingCode: action.trackingCode,
        title: action.title,
        description: action.description,
      };
    case ActionTypes.UPDATE_ORDER:
      return {
        ...state,
        trackingCode: action.trackingCode,
        title: action.title,
        description: action.description,
      };

    case ActionTypes.DELETE_ORDER:
      return {
        ...state,
        trackingCode: action.trackingCode,
        title: action.title,
        description: action.description,
      };

    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}
