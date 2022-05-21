export type Action =
  | {
      type: "SET_MENU_LEVEL";
      payload: number;
    }
  | {
      type: "SET_CURRENT_MENU_ITEM";
      payload: string;
    }
  | {
      type: "SET_CURRENT_MENU_SUB_ITEM";
      payload: string;
    }
  | {
      type: "TOGGLE_SIDEBAR";
    }
  | {
      type: "SET_PARENT_MENU_LABEL";
      payload: string;
    };

export const setMenuLevel = (level: number): Action => ({
  type: "SET_MENU_LEVEL",
  payload: level,
});

export const setCurrentMenuItem = (item: string): Action => ({
  type: "SET_CURRENT_MENU_ITEM",
  payload: item,
});

export const setCurrentMenuSubItem = (item: string): Action => ({
  type: "SET_CURRENT_MENU_SUB_ITEM",
  payload: item,
});

export const toggleSidebar = (): Action => ({
  type: "TOGGLE_SIDEBAR",
});

export const setParentMenuLabel = (label: string): Action => ({
  type: "SET_PARENT_MENU_LABEL",
  payload: label,
});
