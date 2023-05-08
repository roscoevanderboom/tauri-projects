export const getFilename = (string: string) => {
  return string.slice(string.lastIndexOf("\\") + 1, string.lastIndexOf("."));
};

const getDir = (string: string) => {
  return string.slice(0, string.lastIndexOf("\\"));
};

const getExt = (string: string) => {
  return string.slice(string.lastIndexOf("."));
};

export const joinStrings = (dir: string, newName: string, ext: string) => {
  return dir.concat("\\", newName, ext);
};

export default (string: string): { dir: string; name: string; ext: string } => {
  let dir = getDir(string);
  let name = getFilename(string);
  let ext = getExt(string);
  return { dir, name, ext };
};
