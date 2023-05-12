// Core
import { join } from "@tauri-apps/api/path";
import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";
import { Box, Breadcrumbs, Chip, createStyles } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import ToggleThemeButton from "../Buttons/ToggleThemeButton";

const useStyles = createStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: theme.radius.md,
    minHeight: "86px",
  },
}));

function FileBrowserBreadcrumbs() {
  const { breadcrumbs, dispatch, navigate } = useAppContext();
  const { classes } = useStyles();

  function goHome() {
    dispatch(reducer_types.SET_FILE_LIST, []);
    dispatch(reducer_types.SET_FOLDER_LIST, []);
    dispatch(reducer_types.SET_BREADCRUMBS, []);
  }

  const handleBreadcrumbs = async (val: string | false) => {
    let b: string[] = [];
    if (val) {
      b = breadcrumbs.slice(0, breadcrumbs.indexOf(val) + 1);
    } else {
      b = breadcrumbs.slice(0, -1);
    }

    if (b.length > 0) {
      const newPath = await join(...b);
      navigate(newPath);
      dispatch(reducer_types.SET_BREADCRUMBS, b);
      return;
    }
    goHome();
  };

  return (
    <Box className={classes.box}>
      <Breadcrumbs sx={{ margin: 0, flexWrap: "wrap" }} separator="→">
        <Chip checked={false} variant="filled">
          <IconHome onClick={goHome} />
        </Chip>
        {breadcrumbs.map((item, index) => (
          <Chip
            key={index}
            checked={false}
            onClick={() => handleBreadcrumbs(item)}
            color="black"
          >
            {item}
          </Chip>
        ))}
      </Breadcrumbs>
      <ToggleThemeButton />
    </Box>
  );
}

export default FileBrowserBreadcrumbs;
