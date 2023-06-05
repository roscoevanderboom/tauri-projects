import { InitialState } from "@/interfaces";

const initialState: InitialState = {
  loading: true,
  drawer: false,
  toggleLoading: (_val: boolean) => null,
  toggleDrawer: () => null,
  toggleTheme: () => null,
  dispatch: (_t: string, _p: any) => null,
};

export default initialState;
