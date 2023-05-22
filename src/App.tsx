// Hooks and services
import { Outlet, useOutletContext } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { useReducer } from "react";
import { ColorScheme } from "@mantine/core";
import StylesProvider from "./providers/StylesProvider";
// Context
import initialState from "./context/inintialState";
import reducer, { reducer_types } from "./context/reducer";
// Types
import { DeepPartial, InitialState } from "./interfaces";

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

  const toggleDrawer = () => {
    dispatch(reducer_types.SET_DRAWER, !state.drawer);
  };

  return (
    <StylesProvider colorScheme={colorScheme}>
      <Outlet context={{ ...state, dispatch, toggleTheme, toggleDrawer }} />
    </StylesProvider>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
