import { InitialState } from "@/data/interfaces";

const initialState: InitialState = {
  drawer: false,
  notificationsDrawer: false,
  dispatch: (_t: string, _p: any) => null,
  toggleTheme: () => null,
  toggleDrawer: (_type: "left" | "right") => null,
};

export default initialState;
