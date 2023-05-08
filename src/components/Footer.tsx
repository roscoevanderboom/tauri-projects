import { Box, Group, useMantineTheme } from "@mantine/core";
import {
  ClearAlteredFilesButton,
  ClearSelectedFilesButton,
  ConfirmButton,
  SelectFileButton,
} from "./Buttons";

function Footer() {
  const theme = useMantineTheme();
  return (
    <Box component="footer" bg={theme.colorScheme === "dark" ? "#333" : "grey"}>
      <Group position="center">
        <ConfirmButton />
        <SelectFileButton />
        <ClearSelectedFilesButton />
        <ClearAlteredFilesButton />
      </Group>
    </Box>
  );
}

export default Footer;
