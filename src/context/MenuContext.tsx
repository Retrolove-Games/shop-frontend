import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
} from "react";
import { Action } from "./MenuContextActions";
import { menuStateReducer } from "./MenuStateReducer";

type MenuStateContextProps = {
  menuLevel: number;
  currentItem: string;
  currentSubItem: string;
  parentElement: string;
  dispatch: Dispatch<Action>;
};

export type MenuState = {
  menuLevel: number;
  currentItem: string;
  currentSubItem: string;
  parentElement: string;
};

const initialState: MenuState = {
  menuLevel: 0,
  currentItem: "",
  currentSubItem: "",
  parentElement: "",
};

const MenuStateContext = createContext<MenuStateContextProps>(
  {} as MenuStateContextProps
);

export const MenuStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(menuStateReducer, initialState);

  return (
    <MenuStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MenuStateContext.Provider>
  );
};

export const useMenuState = () => useContext(MenuStateContext);
