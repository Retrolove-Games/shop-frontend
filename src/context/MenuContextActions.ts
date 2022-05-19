export type Action =
|
  {
    type: "SET_MENU_LEVEL",
    payload: number,
  }
| {
  type: "SET_CURRENT_ITEM",
  payload: string,
};

export const setMenuLevel = (level: number): Action => ({
  type: "SET_MENU_LEVEL",
  payload: level
})
