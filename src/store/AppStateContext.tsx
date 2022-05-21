import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
} from "react";
import { Action } from "./actions/actions";
import { appStateReducer } from "./reducers/appStateReducer";

export type AppState = {
  menuLevel: number;
  currentMenuItem: string;
  currentMenuSubItem: string;
  parentMenuLabel: string;
  isSidebarOpened: boolean;
};

type AppStateContextProps= AppState & {
  dispatch: Dispatch<Action>;
};

const initialState: AppState = {
  menuLevel: 0,
  currentMenuItem: "",
  currentMenuSubItem: "",
  parentMenuLabel: "",
  isSidebarOpened: false,
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
