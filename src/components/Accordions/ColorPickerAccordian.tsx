import { IconPaint } from "@tabler/icons-react";
import { Select } from "@mantine/core";

const colors = [
  "dark",
  "gray",
  "red",
  "pink",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "green",
  "lime",
  "yellow",
  "orange",
  "teal",
];

interface Props {
  selectedColor: string;
  onChange: (e: string) => void;
}

export function ColorPickerAccordian({ selectedColor, onChange }: Props) {
  return (
    <Select
      label="Select a button color"
      value={selectedColor}
      onChange={onChange}
      icon={<IconPaint size={20} color={selectedColor} />}
      data={colors}
      styles={() => ({
        input: {
          backgroundColor: selectedColor,
          color: "black"
        },
      })}
    />
  );
}
