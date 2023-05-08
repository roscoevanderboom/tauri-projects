import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";
import { Button } from "@mantine/core";
import { open, message } from "@tauri-apps/api/dialog";
import { renameFile } from "@tauri-apps/api/fs";
import { confirm } from "@tauri-apps/api/dialog";
import { notifications } from '@mantine/notifications';

export function SelectFileButton() {
  const { dispatch } = useAppContext();

  async function handleOpen() {
    const selected = await open({ multiple: true });
    if (selected) {
      dispatch(reducer_types.SET_ORIGINAL_FILES, selected);
    } else if (selected === null) {
      console.log("Action cancelled");
    }
  }

  return (
    <Button variant="info" onClick={handleOpen}>
      Select files
    </Button>
  );
}
export function ConfirmButton() {
  const { originalFiles, alteredFiles, dispatch } = useAppContext();

  async function confirmChange() {
    
    let res = await confirm("Are you sure? This action can't be undone.");

    if (res) {
      let errors = [];

      for (let i = 0; i < alteredFiles.length; i++) {
        try {
          await renameFile(originalFiles[i], alteredFiles[i]);
          dispatch(reducer_types.SET_ORIGINAL_FILES, alteredFiles);
          dispatch(reducer_types.SET_ALTERED_FILES, []);
          dispatch(reducer_types.SET_ACTION, "");
        } catch (error) {
          errors.push(alteredFiles[i]);
        }
      }

      if (errors.length > 0) {
        await message(
          `Error renaming the following files:\n${errors
            .map((filename) => `${filename}\n`)
            .join("")}`,
          { type: "error", title: "Renaming error!" }
        );
      } else {
        notifications.show({
          message: `Congratulations! ${alteredFiles.length} files have been renamed.`,
        })
      }
    }
  }

  return (
    <>
      <Button
        variant="success"
        onClick={confirmChange}
        disabled={alteredFiles.length === 0}
      >
        Confirm Change
      </Button>
    </>
  );
}
export function ClearSelectedFilesButton() {
  const { originalFiles, dispatch } = useAppContext();

  function clearSelectedFiles() {
    dispatch(reducer_types.SET_ORIGINAL_FILES, []);
    dispatch(reducer_types.SET_ALTERED_FILES, []);
    dispatch(reducer_types.SET_ACTION, "");
  }

  return (
    <Button
      variant="danger"
      onClick={clearSelectedFiles}
      disabled={originalFiles.length === 0}
    >
      Clear All
    </Button>
  );
}
export function ClearAlteredFilesButton() {
  const { alteredFiles, dispatch } = useAppContext();

  function clearAlteredFiles() {
    dispatch(reducer_types.SET_ALTERED_FILES, []);
    dispatch(reducer_types.SET_ACTION, "");
  }

  return (
    <Button
      variant="warning"
      onClick={clearAlteredFiles}
      disabled={alteredFiles.length === 0}
    >
      Clear Altered Files
    </Button>
  );
}
