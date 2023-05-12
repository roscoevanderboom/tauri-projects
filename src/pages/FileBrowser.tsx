// Core
import { useEffect } from "react";
import { Container, Space } from "@mantine/core";
// Utils
import { getDriveList } from "@/utils/getDrives";
// Components
import FileBrowserBreadcrumbs from "@/components/Breadcrumbs/FileBrowserBreadcrumbs";
import FileBrowserContent from "@/components/Lists/FileBrowserContent";
import DriveList from "@/components/Lists/DriveList";
import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";

function FileBrowser() {
  const { drives, fileList, folderList, dispatch } =
    useAppContext();

  const showDrives = drives.length !== 0;
  const showContents = fileList.length !== 0 || folderList.length !== 0;

  useEffect(() => {
    getDriveList().then((d) => d && dispatch(reducer_types.SET_DRIVES, d));
  }, []);

  return (
    <Container fluid>
      <FileBrowserBreadcrumbs />

      {showDrives && <DriveList />}
      <Space h="lg" />
      {showContents && <FileBrowserContent />}
    </Container>
  );
}

export default FileBrowser;
