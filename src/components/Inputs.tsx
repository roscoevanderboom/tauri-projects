import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";
import formatFilenames, { joinStrings } from "@/utils/formatFilenames";
import { Button, Group, NumberInput, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";

export function FindAndReplace() {
  const { originalFiles, dispatch } = useAppContext();
  const [find, setFind] = useState<string>("");
  const [replace, setReplace] = useState<string>("");

  useEffect(() => {
    if (originalFiles.length !== 0) {
      const updatedArray = originalFiles.map((str) => {
        let { dir, name, ext } = formatFilenames(str);
        let newName = name.split(find).join(replace);
        return joinStrings(dir, newName, ext);
      });
      dispatch(reducer_types.SET_ALTERED_FILES, updatedArray);
    }
  }, [replace]);

  return (
    <Group>
      <TextInput
        label="Find"
        placeholder="Enter text"
        value={find}
        onChange={(e) => setFind(e.currentTarget.value)}
      />
      <TextInput
        label="Replace"
        placeholder="Enter text"
        value={replace}
        onChange={(e) => setReplace(e.currentTarget.value)}
      />
      <Button display="none" type="submit" />
    </Group>
  );
}

export function AddToFilename() {
  const { originalFiles, dispatch } = useAppContext();
  const [prefix, setPrefix] = useState<string>("");
  const [suffix, setSuffix] = useState<string>("");

  useEffect(() => {
    if (originalFiles.length !== 0) {
      const updatedArray = originalFiles.map((str) => {
        let { dir, name, ext } = formatFilenames(str);
        let newName = prefix.concat(name, suffix);
        return joinStrings(dir, newName, ext);
      });
      dispatch(reducer_types.SET_ALTERED_FILES, updatedArray);
    }
  }, [prefix, suffix]);

  return (
    <Group>
      <TextInput
        label="Prefix"
        placeholder="Enter text"
        value={prefix}
        onChange={(e) => setPrefix(e.currentTarget.value)}
      />
      <TextInput
        label="Suffix"
        placeholder="Enter text"
        value={suffix}
        onChange={(e) => setSuffix(e.currentTarget.value)}
      />
    </Group>
  );
}

export function AddAscendingNumbers() {
  const [startingNumber, setStartingNumber] = useState<number | "">("");
  const { originalFiles, dispatch } = useAppContext();

  useEffect(() => {
    if (originalFiles.length !== 0 && typeof startingNumber === "number") {
      const updatedArray = originalFiles.map((str, i) => {
        let { dir, name, ext } = formatFilenames(str);
        let newName = `${startingNumber + i}-${name}`;
        return joinStrings(dir, newName, ext);
      });
      dispatch(reducer_types.SET_ALTERED_FILES, updatedArray);
    }
  }, [startingNumber]);

  return (
    <Group>
      <NumberInput
        label="Starting number"
        placeholder="Enter number"
        value={startingNumber}
        onChange={(e) => setStartingNumber(e)}
      />
    </Group>
  );
}

export function RemoveCharacters() {
  const [leading, setLeading] = useState<number | "">(0);
  const [trailing, setTrailing] = useState<number | "">(0);
  const { originalFiles, dispatch } = useAppContext();

  useEffect(() => {
    if (
      originalFiles.length !== 0 &&
      typeof leading === "number" &&
      typeof trailing === "number"
    ) {
      const updatedArray = originalFiles.map((str) => {
        let { dir, name, ext } = formatFilenames(str);
        let newName = name.slice(leading, name.length - trailing);
        return joinStrings(dir, newName, ext);
      });
      dispatch(reducer_types.SET_ALTERED_FILES, updatedArray);
    }
  }, [leading, trailing]);

  return (
    <Group>
      <NumberInput
        label="Remove leading characters"
        placeholder="Enter number"
        value={leading}
        onChange={(e) => setLeading(e)}
      />
      <NumberInput
        label="Remove trailing characters"
        placeholder="Enter number"
        value={trailing}
        onChange={(e) => setTrailing(e)}
      />
    </Group>
  );
}
