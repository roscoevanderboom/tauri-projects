import { ActionProps, InitialState } from "src/data/interfaces";

const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_DRIVES:
      return { ...state, drives: payload };
    case reducer_types.SET_BREADCRUMBS:
      return { ...state, breadcrumbs: payload };
    case reducer_types.SET_FILE_LIST:
      return { ...state, fileList: payload };
    case reducer_types.SET_FOLDER_LIST:
      return { ...state, folderList: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_DRIVES: "SET_DRIVES",
  SET_BREADCRUMBS: "SET_BREADCRUMBS",
  SET_FILE_LIST: "SET_FILE_LIST",
  SET_FOLDER_LIST: "SET_FOLDER_LIST",
};
