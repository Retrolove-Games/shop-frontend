import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
} from "react";
import { Action } from "./actions/actions";
import { appStateReducer } from "./reducers/appStateReducer";

type AppStateContextProps = {
  menuLevel: number;
  currentItem: string;
  currentSubItem: string;
  parentElement: string;
  isSidebarOpened: boolean;
  dispatch: Dispatch<Action>;
};

export type AppState = {
  menuLevel: number;
  currentItem: string;
  currentSubItem: string;
  parentElement: string;
  isSidebarOpened: boolean;
};

const initialState: AppState = {
  menuLevel: 0,
  currentItem: "",
  currentSubItem: "",
  parentElement: "",
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
