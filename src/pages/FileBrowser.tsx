import DriveList from "@/components/Lists/DriveList";
import { FileBrowserListItem, LocalDriveProps } from "@/data/interfaces";
import { readDirectory } from "@/utils/tauri-invoke";
import { useEffect, useState } from "react";
import { join } from "@tauri-apps/api/path";
import { Container, Space } from "@mantine/core";
import FileBrowserBreadcrumbs from "@/components/Breadcrumbs/FileBrowserBreadcrumbs";
import FileBrowserContent from "@/components/Lists/FileBrowserContent";
import { getDriveList } from "@/utils/getDrives";

function FileBrowser() {
  const [drives, setDrives] = useState<LocalDriveProps[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const [fileList, setFileList] = useState<FileBrowserListItem[]>([]);
  const [folderList, setFoldersList] = useState<FileBrowserListItem[]>([]);

  const showDrives = drives.length !== 0;
  const showContents = fileList.length !== 0 || folderList.length !== 0;

  function goHome() {
    setFileList([]);
    setFoldersList([]);
    setBreadcrumbs([]);
  }

  async function handleDrives(drive: string) {
    let res = await navigate(drive);
    res && setBreadcrumbs([drive]);
  }

  async function handleFolders(path: string) {
    const newPath = await join(...breadcrumbs, path);
    let res = await navigate(newPath);
    res && setBreadcrumbs((prev) => [...prev, path]);
  }

  const navigate = async (newPath: string) => {
    let res = await readDirectory(newPath);
    if (res) {
      setFoldersList(res.folders);
      setFileList(res.files);
      return true;
    }
    return false;
  };

  const handleBreadcrumbs = async (val: string | false) => {
    let b: string[] = [];
    if (val) {
      b = breadcrumbs.slice(0, breadcrumbs.indexOf(val) + 1);
    } else {
      b = breadcrumbs.slice(0, -1);
    }

    if (b.length > 0) {
      const newPath = await join(...b);
      navigate(newPath);
      setBreadcrumbs(b);
      return;
    }
    goHome();
  };

  useEffect(() => {
    getDriveList().then((d) => d && setDrives(d));
  }, []);

  return (
    <Container>
      <FileBrowserBreadcrumbs
        breadcrumbs={breadcrumbs}
        goHome={goHome}
        handleBreadcrumbs={handleBreadcrumbs}
      />

      {showDrives && <DriveList drives={drives} handleDrives={handleDrives} />}
      <Space h="lg" />
      {showContents && (
        <FileBrowserContent
          fileList={fileList}
          folderList={folderList}
          handleFolders={handleFolders}
        />
      )}
    </Container>
  );
}

export default FileBrowser;
