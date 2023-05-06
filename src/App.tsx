import { MantineProvider } from "@mantine/core";
import { Outlet, useOutletContext } from "react-router-dom";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { InitialState } from "./data/interfaces";
// import { useEffect, useState } from "react";

export default function App() {
  const [drawer, setDrawer] = useDisclosure(false);
  const [notificationsDrawer, setNotificationsDrawer] = useDisclosure(false);

  const [userTheme, setUserTheme] = useLocalStorage({
    key: "theme",
    defaultValue: {
      buttons: "green",
      theme: false,
    },
  });

  // Update storedStyles with new values
  const updateTheme = (prop: string, value: string | boolean) => {
    const newStyles = { ...userTheme, [prop]: value };
    setUserTheme(newStyles);
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: userTheme.theme ? "light" : "dark",
        components: {
          Button: {
            defaultProps: {
              size: "sm",
              color: userTheme.buttons,
            },
          },
        },
      }}
    >
      <Outlet
        context={{
          drawer,
          setDrawer,
          notificationsDrawer,
          setNotificationsDrawer,
          userTheme,
          updateTheme,
        }}
      />
    </MantineProvider>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
