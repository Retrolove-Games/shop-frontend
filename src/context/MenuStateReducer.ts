import { MenuState } from "./MenuContext";
import { Action } from "./MenuContextActions";

export const menuStateReducer = (
  state: MenuState,
  action: Action
): MenuState => {
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

    default:
      throw new Error("Mssing dispatcher action.");
  }
};