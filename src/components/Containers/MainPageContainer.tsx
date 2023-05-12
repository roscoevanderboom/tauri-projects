import { ScrollArea } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function MainPageContainer({ children }: Props) {
  return (
    <ScrollArea sx={{ flexGrow: 1, height: "calc(100vh - 160px)" }}>
      {children}
    </ScrollArea>
  );
}

export default MainPageContainer;
