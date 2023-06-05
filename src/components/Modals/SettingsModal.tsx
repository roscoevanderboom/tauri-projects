import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon, Group, Text, Tooltip } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import ThemeColorToggle from "../Buttons/ThemeColorToggle";

function SettingsModel() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="App settings" centered>
        <Group position="apart" my="md">
          <Text>Set theme</Text>
          <ThemeColorToggle />
        </Group>
      </Modal>

      <ActionIcon onClick={open}>
        <Tooltip label="Settings" withArrow position="bottom">
          <IconSettings />
        </Tooltip>
      </ActionIcon>
    </>
  );
}

export default SettingsModel;
