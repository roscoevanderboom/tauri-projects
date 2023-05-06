import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import {
  IconGauge,
  IconAdjustments,
  IconFileDatabase,
} from "@tabler/icons-react";
import Home from "./pages/Home";
import FileBrowser from "./pages/FileBrowser";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import { tableData } from "./data/constants/mockData";
import Page404 from "./pages/404";

export const routes = [
  {
    label: "Dashboard",
    icon: IconGauge,
    element: <Dashboard />,
    path: "/home/dashboard",
  },
  {
    label: "File Browser",
    icon: IconFileDatabase,
    element: <FileBrowser />,
    path: "/home/file-browser",
  },
  {
    label: "Contacts",
    icon: IconAdjustments,
    element: <Contacts data={tableData} />,
    path: "/home/contacts",
  },
];

export default createMemoryRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/landing-page",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <Home />,
          children: routes,
        },
      ],
    },
  ],
  {
    initialEntries: ["/landing-page"],
  }
);
