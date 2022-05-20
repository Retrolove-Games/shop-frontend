export type Action =
  | {
      type: "SET_MENU_LEVEL";
      payload: number;
    }
  | {
      type: "SET_CURRENT_ITEM";
      payload: string;
    }
  | {
      type: "TOGGLE_SIDEBAR";
    };

export const setMenuLevel = (level: number): Action => ({
  type: "SET_MENU_LEVEL",
  payload: level,
});

export const toggleSidebar = (): Action => ({
  type: "TOGGLE_SIDEBAR",
});
