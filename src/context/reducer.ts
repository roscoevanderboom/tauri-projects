import { ActionProps, InitialState } from "src/data/interfaces";

const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_DRAWER:
      return { ...state, drawer: payload };
    case reducer_types.SET_NOTIFICATIONS_DRAWER:
      return { ...state, notificationsDrawer: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_DRAWER: "SET_DRAWER",
  SET_NOTIFICATIONS_DRAWER: "SET_NOTIFICATIONS_DRAWER",
};
