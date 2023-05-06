import { Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";
import AppHeader from "@/components/Headers/AppHeader";
import AppDrawer from "@/components/Navigation/AppDrawer";
import { useAppContext } from "@/App";
import NotificationsDrawer from "@/components/Navigation/NotificationsDrawer";

export default function Home() {
  const appContext = useAppContext();
  return (
    <Paper>
      <AppHeader />
      <AppDrawer />
      <NotificationsDrawer />
      <Outlet context={appContext} />
    </Paper>
  );
}
