import { useAppContext } from "@/App";
import { Drawer, createStyles } from "@mantine/core";

const useStyles = createStyles({
  header: {
    backgroundColor: "#339AF0",
  },
  drawer: {
    padding: 0,
  },
});

export default function AppDrawer() {
  const { classes } = useStyles();
  const { drawer, toggleDrawer } = useAppContext();

  return (
    <>
      <Drawer.Root
        size="xs"
        opened={drawer}
        onClose={() => toggleDrawer("left")}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header className={classes.header}>
            <Drawer.Title>Mantine Settings</Drawer.Title>
            <Drawer.CloseButton color="violet" />
          </Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
