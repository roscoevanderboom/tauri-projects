import { useAppContext } from "@/App";
import {
  Drawer,
  Stack,
  Switch,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconSunOff } from "@tabler/icons-react";
import { ColorPickerAccordian } from "../Accordions/ColorPickerAccordian";

const useStyles = createStyles({
  header: {
    backgroundColor: "#339AF0",
  },
  drawer: {
    padding: 0,
  },
});

export default function AppDrawer() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const {
    drawer,
    setDrawer,
    userTheme,
    updateTheme
  } = useAppContext();

  return (
    <>
      <Drawer.Root size="xs" opened={drawer} onClose={setDrawer.close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header className={classes.header}>
            <Drawer.Title>Mantine Settings</Drawer.Title>
            <Drawer.CloseButton color="violet" />
          </Drawer.Header>
          <Drawer.Body>
            <Stack mt={20} spacing="xl">
              <Switch
                checked={userTheme.theme}
                onChange={() => updateTheme("theme", !userTheme.theme)}
                color="teal"
                size="md"
                label="Toggle dark / light mode"
                thumbIcon={
                  userTheme.theme ? (
                    <IconSun
                      size="0.8rem"
                      color={theme.colors.teal[theme.fn.primaryShade()]}
                      stroke={3}
                    />
                  ) : (
                    <IconSunOff
                      size="0.8rem"
                      color={theme.colors.red[theme.fn.primaryShade()]}
                      stroke={3}
                    />
                  )
                }
              />
              <ColorPickerAccordian
                selectedColor={theme.colors[userTheme.buttons][7]}
                onChange={(e: string) => updateTheme("buttons", e)}
              />
            </Stack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
