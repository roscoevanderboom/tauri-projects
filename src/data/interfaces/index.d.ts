export interface InitialState {
  action: SelectActions;
  originalFiles: string[];
  alteredFiles: string[];
  dispatch: Dispatch;
  toggleTheme: () => void;
}

export interface ActionProps {
  payload: any;
  type: string;
}

export type Dispatch = (type: string, payload: any) => void;

export type SelectActions =
  | "Find and replace"
  | "Add prefix or suffix"
  | "Add number prefix"
  | "Remove characters"
  | "";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Function ? T[P] : DeepPartial<T[P]>;
};
