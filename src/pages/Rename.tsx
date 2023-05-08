import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";
import FilesContainer from "@/components/FilesContainer";
import { useAppContext } from "@/App";
import Welcome from "@/components/Welcome";

function Rename() {
  const { originalFiles } = useAppContext();
  return (
    <>
      <Toolbar />
      {originalFiles.length === 0 ? <Welcome /> : <FilesContainer />}
      <Footer />
    </>
  );
}

export default Rename;
