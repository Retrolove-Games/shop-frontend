import { AppState } from "../AppStateContext";
import { Action } from "../actions/actions";

export const appStateReducer = (
  state: AppState,
  action: Action
): AppState => {
  switch(action.type) {
    case "SET_MENU_LEVEL": {
      return {
        ...state,
        menuLevel: action.payload
      }
    }

    case "SET_CURRENT_ITEM": {
      return {
        ...state,
        currentItem: action.payload
      }
    }

    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened
      }
    }

    default:
      throw new Error("Mssing dispatcher action.");
  }
};
