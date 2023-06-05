
export interface InitialState {
  loading: boolean;
  drawer: boolean;
  toggleLoading: (val: boolean) => void;
  toggleDrawer: () => void;
  toggleTheme: () => void;
  dispatch: (_t: string, _p: any) => void,
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