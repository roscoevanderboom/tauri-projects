import { useAppContext } from "@/App";
import { getFilename } from "@/utils/formatFilenames";
import { Divider, ScrollArea, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function FilesContainer() {
  const { originalFiles, alteredFiles } = useAppContext();
  const { height } = useViewportSize();
  const scrollareaHeight = height - 225;
  return (
    <div className="main-content">
      <div className="column file-column-left">
        <Text mb="sm" align="center" size="lg">
          Original Names
        </Text>
        <Divider />
        <ScrollArea h={scrollareaHeight}>
          {originalFiles.map((path, i) => (
            <p key={i.toString()}>{getFilename(path)}</p>
          ))}
        </ScrollArea>
      </div>
      <div className="column file-column-right">
        <Text mb="sm" align="center" size="lg">
          Altered Names
        </Text>
        <Divider />
        <ScrollArea h={scrollareaHeight}>
          {alteredFiles.map((path, i) => (
            <p key={i.toString()}>{getFilename(path)}</p>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
