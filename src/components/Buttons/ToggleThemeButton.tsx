import { useAppContext } from "@/App";
import {
  createStyles,
  rem,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 1000,
    padding: 3,
    maxWidth: rem(36)
  },
}));

export default function ToggleThemeButton() {
  const { toggleTheme } = useAppContext();
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.control} onClick={toggleTheme}>
      {theme.colorScheme === "dark" ? (
        <IconSun color="orange" size="1.5rem" />
      ) : (
        <IconMoon size="1.5rem" />
      )}
    </UnstyledButton>
  );
}
