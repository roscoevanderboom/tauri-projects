import { appWindow } from "@tauri-apps/api/window";

export const handleWindow = async (action: string) => {
  switch (action) {
    case "minimize":
      await appWindow.minimize();
      break;
    case "resize":
      if (await appWindow.isMaximized()) {
        await appWindow.unmaximize();
        return;
      }
      appWindow.maximize();
      break;
    default:
      await appWindow.hide();
      break;
  }
};
