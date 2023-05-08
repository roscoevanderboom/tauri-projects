import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import Rename from "./pages/Rename";

export default createMemoryRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/rename",
          element: <Rename />
        }
      ]
    },
  ],
  {
    initialEntries: ["/rename"],
  }
);
