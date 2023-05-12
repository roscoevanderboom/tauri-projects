import { useReducer } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { DeepPartial, InitialState } from "./data/interfaces";
import reducer, { reducer_types } from "./context/reducer";
import initialState from "./context/inintialState";
import { useLocalStorage } from "@mantine/hooks";
import StyleProvider from "./providers/StyleProvider";
import { ColorScheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { readDirectory } from "./utils/tauri-invoke";

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

  const dispatch = (type: string, payload: any) => {
    setState({ type, payload });
  };

  const navigate = async (newPath: string) => {
    let res = await readDirectory(newPath);
    if (res) {
      dispatch(reducer_types.SET_FILE_LIST, res.files);
      dispatch(reducer_types.SET_FOLDER_LIST, res.folders);
      return true;
    }
    return false;
  };

  return (
    <StyleProvider colorScheme={colorScheme}>
      <Notifications position="top-center" zIndex={2077} autoClose={3000} />
      <Outlet context={{ ...state, dispatch, toggleTheme, navigate }} />
    </StyleProvider>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
