export interface DisclosureProps {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface UserTheme {
  buttons: string;
  theme: boolean;
}

export interface UserThemeLocalStorage {
  key: string;
  defaultValue: UserTheme;
}

export interface InitialState {
  drawer: boolean;
  setDrawer: DisclosureProps;
  notificationsDrawer: boolean;
  setNotificationsDrawer: DisclosureProps;
  userTheme: UserTheme;
  updateTheme: (prop: string, value: string | boolean) => void;
}

export type Dispatch = (type: string, payload: any) => void;

export interface FavoritePath {
  name: string;
  path: string;
}

export interface LocalDriveProps {
  drive: string;
  volume: string;
}

export interface MacOSDiskObject {
  DeviceIdentifier: string;
  VolumeName?: string;
}

export interface FileBrowserListItem {
  name: string;
  path: string;
}

export interface DirectoryListing {
  files: FileBrowserListItem[];
  folders: FileBrowserListItem[];
}
