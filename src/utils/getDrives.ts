import { LocalDriveProps } from "@/data/interfaces";
import { MacOSDiskObject } from "@/data/interfaces";
import { Command } from "@tauri-apps/api/shell";
import { platform } from "@tauri-apps/api/os";

const getWindowsDrives = async (): Promise<LocalDriveProps[]> => {
  const output = await new Command("wmic", [
    "logicaldisk",
    "get",
    "Name,",
    " VolumeName",
  ]).execute();
  return output.stdout
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => {
      const [drive, volume] = line.trim().split(/\s+/);
      return { drive, volume };
    });
};
const getMacOSDrives = async (): Promise<LocalDriveProps[]> => {
  const output = await new Command("diskutil", ["list", "-plist"]).execute();
  const pl = require("plist");
  const data = pl.parse(output.stdout);
  return data.AllDisksAndPartitions.filter(
    (item: MacOSDiskObject) => item.VolumeName
  ).map((item: MacOSDiskObject) => ({
    drive: item.DeviceIdentifier,
    volume: item.VolumeName!,
  }));
};

const linuxDriveList = async () => {
  const output = await new Command("diskutil", ["list", "-plist"]).execute();
  return output.stdout
    .trim()
    .split("\n")
    .map((line: string) => {
      const [device, mountpoint] = line.trim().split(/\s+/);
      return { drive: device, volume: mountpoint };
    });
};

export const getDriveList = async (): Promise<LocalDriveProps[]> => {
  let list: LocalDriveProps[] = [];
  let os = await platform();
  switch (os) {
    case "win32":
      list = await getWindowsDrives();
      break;
    case "darwin":
      list = await getMacOSDrives();
      break;
    default:
      list = await linuxDriveList();
      break;
  }
  return list;
};
