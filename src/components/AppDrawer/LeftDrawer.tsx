import { Box, Burger, Drawer, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const height = "calc(100vh - 60px)";

export default function LeftDrawer() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Burger
        size="md"
        opened={opened}
        onClick={toggle}
        style={{ float: "left" }}
        aria-label="Toggle navigation"
      />
      <Drawer
        opened={opened}
        onClose={close}
        title="Tauri-Mantine-Boilerplate"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="xs"
        styles={{
          body: {
            height,
            padding: 0
          },
        }}
      >
        <ScrollArea h={height} style={{ borderTop: "1px solid gray" }}>
          <Box p="sm" h="120vh">Drawer content</Box>
        </ScrollArea>
      </Drawer>
    </>
  );
}
