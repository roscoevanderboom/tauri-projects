export interface InitialState {
  drives: LocalDriveProps[];
  breadcrumbs: string[];
  fileList: FileBrowserListItem[];
  folderList: FileBrowserListItem[];
  dispatch: Dispatch;
  toggleTheme: () => void;
  navigate: (_p: string) => Promise;
}

export interface ActionProps {
  payload: any;
  type: string;
}

export type Dispatch = (type: string, payload: any) => void;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Function ? T[P] : DeepPartial<T[P]>;
};

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
