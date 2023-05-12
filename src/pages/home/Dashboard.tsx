import MainPageContainer from "@/components/Containers/MainPageContainer";
import { ActionsGrid } from "@/components/Grids/ActionsGrid";
import { Box } from "@mantine/core";

function Dashboard() {
  return (
    <MainPageContainer>
      <Box p={25} >
        <ActionsGrid />
      </Box>
    </MainPageContainer>
  );
}

export default Dashboard;
