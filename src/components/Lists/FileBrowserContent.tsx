// Core
import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";
import { join } from "@tauri-apps/api/path";
import { openFile } from "@/utils/tauri-invoke";
import { ScrollArea, Space } from "@mantine/core";
// Components
import FolderListItem from "../Listitems/FolderListItem";
import FileListItem from "../Listitems/FileListItem";


function FileBrowserContent() {
  const { breadcrumbs, fileList, folderList, dispatch, navigate } =
    useAppContext();

  async function handleFolders(path: string) {
    const newPath = await join(...breadcrumbs, path);
    let res = await navigate(newPath);
    res && dispatch(reducer_types.SET_BREADCRUMBS, [...breadcrumbs, path]);
  }

  return (
    <ScrollArea sx={{ height: "calc(100vh - 160px)" }}>
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
