import { InitialState } from "@/data/interfaces";

const initialState: InitialState = {
  action: "",
  originalFiles: [],
  alteredFiles: [],
  dispatch: (_type: string, _payload: string) => null,
  toggleTheme: () => null
};

export default initialState;
