import { showNotification } from "@mantine/notifications";

const tweets = (type: string, message?: string) => {
  switch (type) {
    case "success":
      return showNotification({
        id: "success",
        message,
        autoClose: 5000,
        color: "green",
      });
    case "error":
      return showNotification({
        id: "error",
        message,
        autoClose: false,
        color: "red",
      });
    case "start":
      return showNotification({
        id: "process",
        message,
        autoClose: false,
        loading: true,
        color: "green",
      });
    case "update":
      return showNotification({
        id: "process",
        message,
        autoClose: false,
        loading: true,
        color: "purple",
      });
    case "end":
      return showNotification({
        id: "process",
        message,
        autoClose: 5000,
        color: "yellow",
      });

    default:
      break;
  }
};

export default tweets;
