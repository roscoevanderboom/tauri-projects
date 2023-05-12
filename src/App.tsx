import { ColorScheme } from "@mantine/core";
import { Outlet, useOutletContext } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { DeepPartial, InitialState } from "./data/interfaces";
import { useReducer } from "react";
import reducer, { reducer_types } from "./context/reducer";
import initialState from "./context/inintialState";
import StyleProvider from "./providers/StylesProvider";

export default function App() {
  const [state, setState] = useReducer(reducer, initialState);
  const [colorScheme, setUserTheme] = useLocalStorage<DeepPartial<ColorScheme>>(
    {
      key: "theme",
      defaultValue: "light",
    }
  );

  const dispatch = (type: string, payload: any) => {
    setState({ type, payload });
  };

  const toggleTheme = () => {
    setUserTheme(colorScheme === "light" ? "dark" : "light");
  };

  const toggleDrawer = (type: "left" | "right") => {
    switch (type) {
      case "left":
        return dispatch(reducer_types.SET_DRAWER, !state.drawer);
      case "right":
        return dispatch(
          reducer_types.SET_NOTIFICATIONS_DRAWER,
          !state.notificationsDrawer
        );
    }
  };

  return (
    <StyleProvider colorScheme={colorScheme}>
      <Outlet context={{ ...state, dispatch, toggleTheme, toggleDrawer }} />
    </StyleProvider>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
