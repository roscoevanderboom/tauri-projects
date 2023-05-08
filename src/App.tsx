import { useReducer } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { DeepPartial, InitialState } from "./data/interfaces";
import reducer from "./context/reducer";
import initialState from "./context/inintialState";
import { useLocalStorage } from "@mantine/hooks";
import StyleProvider from "./providers/StyleProvider";
import { ColorScheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App() {
  const [state, setState] = useReducer(reducer, initialState);
  const [colorScheme, setUserTheme] = useLocalStorage<
    DeepPartial<ColorScheme> | undefined
  >({
    key: "theme",
    defaultValue: "light",
  });

  // Update storedStyles with new values
  const toggleTheme = () => {
    setUserTheme(colorScheme === "light" ? "dark" : "light");
  };

  const dispatch = (type: string, payload: string) => {
    setState({ type, payload });
  };

  return (
    <StyleProvider colorScheme={colorScheme}>
      <Notifications position="top-center" zIndex={2077} autoClose={3000} />
      <Outlet context={{ ...state, dispatch, toggleTheme }} />
    </StyleProvider>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
