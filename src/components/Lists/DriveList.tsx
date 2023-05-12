import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";
import { Button, SimpleGrid, Space, Text } from "@mantine/core";

function DriveList() {
  const { drives, navigate, dispatch } = useAppContext();

  async function handleDrives(drive: string) {
    let res = await navigate(drive);
    res && dispatch(reducer_types.SET_BREADCRUMBS, [drive]);
  }

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
