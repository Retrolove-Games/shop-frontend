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

    case "SET_CURRENT_MENU_ITEM": {
      return {
        ...state,
        currentMenuItem: action.payload
      }
    }

    case "SET_CURRENT_MENU_SUB_ITEM": {
      return {
        ...state,
        currentMenuSubItem: action.payload
      }
    }

    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened
      }
    }

    case "SET_PARENT_MENU_LABEL": {
      return {
        ...state,
        parentMenuLabel: action.payload
      }
    }

    default:
      throw new Error("Mssing dispatcher action.");
  }
};
