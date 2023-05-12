import { FileBrowserListItem } from "@/data/interfaces";
import { Paper, Text, createStyles } from "@mantine/core";
import { IconFolder } from "@tabler/icons-react";

interface Props {
  f: FileBrowserListItem;
  onClick: () => void;
}

const useStyles = createStyles(() => ({
  paper: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    margin: "8px 0px",
    paddingLeft: 10,
    "&:hover": {
      backgroundColor: "lightgrey",
      color: "black"
    },
  },
  text: {
    padding: "8px 0px 8px 12px",
  },
}));

const FolderListItem = ({ f, onClick }: Props) => {
  const { classes } = useStyles();
  return (
    <Paper shadow="xs" className={classes.paper} onClick={onClick}>
      <IconFolder />
      <Text className={classes.text}>{f.name}</Text>
    </Paper>
  );
};

export default FolderListItem;
