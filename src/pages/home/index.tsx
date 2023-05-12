import { Paper, createStyles } from "@mantine/core";
import { Outlet } from "react-router-dom";
import AppHeader from "@/components/Headers/AppHeader";
import AppDrawer from "@/components/Navigation/AppDrawer";
import { useAppContext } from "@/App";
import NotificationsDrawer from "@/components/Navigation/NotificationsDrawer";
import AppFooter from "@/components/Footers/Footer";

const useStyles = createStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    width: "100vw"
  },
});

export default function Home() {
  const appContext = useAppContext();
  const { classes } = useStyles();
  return (
    <Paper className={classes.paper}>
      <AppHeader />
      <AppDrawer />
      <NotificationsDrawer />
      <Outlet context={appContext} />
      <AppFooter />
    </Paper>
  );
}
