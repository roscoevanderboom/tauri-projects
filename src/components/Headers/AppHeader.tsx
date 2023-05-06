import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconNotification, IconSearch } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { routes } from "@/router";
import { Link } from "react-router-dom";
import { useAppContext } from "@/App";
import ThemeColorToggle from "../Buttons/ThemeColorToggle";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export default function AppHeader() {
  const { classes } = useStyles();
  const { drawer, setDrawer, setNotificationsDrawer } = useAppContext();

  const items = routes.map((link) => (
    <Text
      key={link.path}
      to={link.path}
      component={Link}
      className={classes.link}
    >
      {link.label}
    </Text>
  ));

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={drawer} onClick={setDrawer.toggle} size="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <ThemeColorToggle />
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
          <UnstyledButton  onClick={setNotificationsDrawer.toggle} >
            <IconNotification />
          </UnstyledButton>
        </Group>
      </div>
    </Header>
  );
}
