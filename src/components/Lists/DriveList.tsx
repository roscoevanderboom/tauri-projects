import { LocalDriveProps } from "@/data/interfaces";
import { Button, SimpleGrid, Space, Text } from "@mantine/core";

interface Props {
  drives: LocalDriveProps[];
  handleDrives: (path: string) => void
}

function DriveList({ drives, handleDrives }: Props) {
  return (
    <SimpleGrid cols={drives.length}>
      {drives.map((d, i) => (
        <Button key={i.toString()} onClick={() => handleDrives(`${d.drive}\\`)}>
          <Text>{d.drive}</Text>
          <Space w="md" />
          <Text>{d.volume}</Text>
        </Button>
      ))}
    </SimpleGrid>
  );
}
export default DriveList;
