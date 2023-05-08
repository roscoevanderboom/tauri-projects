import { ActionProps, InitialState } from "src/data/interfaces";

const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_ORIGINAL_FILES:
      return { ...state, originalFiles: payload };
    case reducer_types.SET_ALTERED_FILES:
      return { ...state, alteredFiles: payload };
    case reducer_types.SET_ACTION:
      return { ...state, action: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_ORIGINAL_FILES: "SET_ORIGINAL_FILES",
  SET_ALTERED_FILES: "SET_ALTERED_FILES",
  SET_ACTION: "SET_ACTION",
};
