import { Stack, Text } from "@mantine/core";

function Welcome() {
  return (
    <div className="select-file-container">
      <Stack h={100}>
        <Text align="center" size={30}>
          Welcome to Tauri file renamer
        </Text>
        <Text align="center" size="md">
          First, click the "Select files" button and add some files to rename
        </Text>
        <Text align="center" size="md">
          Next, select an action to perform on the selected files
        </Text>
      </Stack>
    </div>
  );
}

export default Welcome;
