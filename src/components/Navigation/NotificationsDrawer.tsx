import { useAppContext } from "@/App";
import { Drawer, List, createStyles } from "@mantine/core";

const useStyles = createStyles({
  header: {
    backgroundColor: "#339AF0",
  },
  drawer: {
    padding: 0,
  },
});

export default function NotificationsDrawer() {
  const { classes } = useStyles();
  const { notificationsDrawer, setNotificationsDrawer } = useAppContext();

  return (
    <>
      <Drawer.Root
        position="right"
        size="xs"
        opened={notificationsDrawer}
        onClose={setNotificationsDrawer.close}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header className={classes.header}>
            <Drawer.Title>Notifications Drawer</Drawer.Title>
            <Drawer.CloseButton color="violet" />
          </Drawer.Header>
          <Drawer.Body>
            <List
              mt={18}
              center
              size="lg"
              spacing="xs"
              type="ordered"
              withPadding={true}
            >
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
              <List.Item>Notifications</List.Item>
            </List>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
