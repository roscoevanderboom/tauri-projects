import {
  Box,
  Breadcrumbs,
  Chip,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    minHeight: "86px",
  },
}));

interface Props {
  breadcrumbs: string[];
  goHome: () => void;
  handleBreadcrumbs: (name: string) => void;
}

function FileBrowserBreadcrumbs({
  breadcrumbs,
  goHome,
  handleBreadcrumbs,
}: Props) {
  const { classes } = useStyles();
  const { colorScheme } = useMantineTheme();
  return (
    <Box className={classes.box}>
      <Breadcrumbs sx={{ margin: 0, flexWrap: "wrap" }} separator="→">
        <Chip checked={false} variant="filled" >
          <IconHome
            color={colorScheme === "dark" ? "white" : "black"}
            onClick={goHome}
          />
        </Chip>
        {breadcrumbs.map((item, index) => (
          <Chip
            key={index}
            checked={false}
            onClick={() => handleBreadcrumbs(item)}
            color="black"
            // variant={index === breadcrumbs.length - 1 ? "outline" : "light"}
          >
            {item}
          </Chip>
        ))}
      </Breadcrumbs>
    </Box>
  );
}

export default FileBrowserBreadcrumbs;
