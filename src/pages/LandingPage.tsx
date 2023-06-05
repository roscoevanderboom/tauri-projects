import { useAppContext } from "@/App";
import useNotifications from "@/hooks/useNotifications";
import DefaultLayout from "@/layout/DefaultLayout";
import { Title } from "@mantine/core";
import { useEffect } from "react";

function LandingPage() {
  const { toggleLoading } = useAppContext();
  const notification = useNotifications();

  useEffect(() => {
    setTimeout(() => {
      toggleLoading(false);
    }, 3000);

    setTimeout(() => {
      notification("success", {
        id: "welcome-message",
        title: "Notification",
        message: "This is a welcome message",
        loading: true
      });
      setTimeout(() => {
        notification("update", {
          id: "welcome-message",
          title: "Notification-update",
          message: "The notification has been updated",
          autoClose: false
        });
      }, 2000);
    }, 4000);
  }, []);

  return (
    <DefaultLayout>
      <Title align="center">Landing Page</Title>
    </DefaultLayout>
  );
}

export default LandingPage;
