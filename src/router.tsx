import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import FileBrowser from "./pages/FileBrowser";

export default createMemoryRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/browser",
          element: <FileBrowser />
        }
      ]
    },
  ],
  {
    initialEntries: ["/browser"],
  }
);
