import { FileBrowserListItem } from "@/data/interfaces";
import { openFile } from "@/utils/tauri-invoke";
import { ScrollArea, Space } from "@mantine/core";
import FolderListItem from "../Listitems/FolderListItem";
import FileListItem from "../Listitems/FileListItem";

interface Props {
  fileList: FileBrowserListItem[];
  folderList: FileBrowserListItem[];
  handleFolders: (newPath: string) => Promise<void>;
}

function FileBrowserContent({ fileList, folderList, handleFolders }: Props) {
  return (
    <ScrollArea sx={{ height: "calc(100vh - 305px)" }}>
      {folderList.map((f, i) => (
        <FolderListItem
          f={f}
          key={i.toString()}
          onClick={() => handleFolders(f.name)}
        />
      ))}
      <Space h="md" />
      {fileList.map((f, i) => (
        <FileListItem
          f={f}
          key={i.toString()}
          onClick={() => openFile(f.path)}
        />
      ))}
    </ScrollArea>
  );
}

export default FileBrowserContent;
