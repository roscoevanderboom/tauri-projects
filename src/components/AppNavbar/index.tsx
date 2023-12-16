import { Flex, Title, Group, Paper } from "@mantine/core";
import ThemeBtn from "../AppButtons/ThemeBtn";
import LeftDrawer from "../AppDrawer/LeftDrawer";

export default function AppNavbar() {
  return (
    <Paper withBorder>
      <Flex p="md" justify="space-between" align="center">
        <LeftDrawer />
        <Title ta="center" order={3} p={0}>
          Tauri-Mantine-Boilerplate
        </Title>
        <Group gap="sm">
          <ThemeBtn />
        </Group>
      </Flex>
    </Paper>
  );
}
