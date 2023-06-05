import { useAppContext } from "@/App";
import { Drawer } from "@mantine/core";

export default function AppDrawer() {
  const { drawer, toggleDrawer } = useAppContext();

  return (
    <>
      <Drawer.Root size="xs" opened={drawer} onClose={() => toggleDrawer()}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header mb={24} sx={{ backgroundColor: "teal" }}>
            <Drawer.Title>Mantine Settings</Drawer.Title>
            <Drawer.CloseButton color="violet" />
          </Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
