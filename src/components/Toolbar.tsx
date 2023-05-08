import { Group, useMantineTheme } from "@mantine/core";
import {
  FindAndReplace,
  AddToFilename,
  AddAscendingNumbers,
  RemoveCharacters,
} from "./Inputs";
import SelectAction from "./SelectAction";
import { useAppContext } from "@/App";
import ToggleThemeButton from "./ToggleThemeButton";

function Toolbar() {
  const { action } = useAppContext();
  const theme = useMantineTheme();

  return (
    <header>
      <Group
        py={10}
        px={20}
        align="center"
        position="left"
        sx={{ justifyContent: "space-between" }}
        bg={theme.colorScheme === "dark" ? "#333" : "grey"}
      >
        <SelectAction />
        {action === "Find and replace" && <FindAndReplace />}
        {action === "Add prefix or suffix" && <AddToFilename />}
        {action === "Add number prefix" && <AddAscendingNumbers />}
        {action === "Remove characters" && <RemoveCharacters />}
        <ToggleThemeButton />
      </Group>
    </header>
  );
}

export default Toolbar;
