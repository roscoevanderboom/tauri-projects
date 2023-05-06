import { invoke } from "@tauri-apps/api";
import { message } from "@tauri-apps/api/dialog";
import { DirectoryListing } from "../data/interfaces";

export const readDirectory = async (path: string): Promise<DirectoryListing | false> => {
  try {
    let res: DirectoryListing = await invoke("read_dir", { pathToRead: path });
    return res;
  } catch (err: any) {
    await message(err, { title: "Tauri", type: "error" });
    return false;
  }
};

export const openFile = async (path: string) => {
  await invoke("open_file", { pathToFile: path }).catch(async (err) => {
    await message(err, { title: "Tauri", type: "error" });
  });
};
