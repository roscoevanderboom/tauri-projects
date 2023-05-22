import { InitialState } from "@/interfaces";

const initialState: InitialState = {
  drawer: false,
  dispatch: (_t: string, _p: any) => null,
  toggleTheme: () => null,
  toggleDrawer: () => null,
};

export default initialState;
