import { ActionProps, InitialState } from "@/interfaces";


const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_LOADING:
      return { ...state, loading: payload };
    case reducer_types.SET_DRAWER:
      return { ...state, drawer: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_DRAWER: "SET_DRAWER",
  SET_LOADING: "SET_LOADING",
};
