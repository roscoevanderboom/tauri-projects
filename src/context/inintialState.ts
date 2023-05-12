import { InitialState } from "@/data/interfaces";

const initialState: InitialState = {
  drives: [],
  breadcrumbs: [],
  fileList: [],
  folderList: [],
  dispatch: (_t: string, _p: any) => null,
  toggleTheme: () => null,
  navigate: (_p: string) => null
};

export default initialState;
