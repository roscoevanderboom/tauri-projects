
export interface InitialState {
  drawer: boolean;
  dispatch: (_t: string, _p: any) => void,
  toggleTheme: () => void;
  toggleDrawer: () => void;
}

export type Dispatch = (type: string, payload: any) => void;

export interface ActionProps {
  payload: any;
  type: string;
}


export interface UserThemeLocalStorage {
  key: string;
  defaultValue: UserTheme;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Function ? T[P] : DeepPartial<T[P]>;
};