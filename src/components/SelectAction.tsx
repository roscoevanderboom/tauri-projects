import { useAppContext } from "@/App";
import { reducer_types } from "@/context/reducer";
import selectActions from "@/data/constants/selectActions";
import { Select } from "@mantine/core";

function SelectAction() {
  const { dispatch, action } = useAppContext();

  const handleSelectAction = (e: string | null) => {
    dispatch(reducer_types.SET_ACTION, e);
  };

  return (
    <Select
      label="Select an action"
      placeholder="Pick one"
      value={action}
      data={selectActions}
      onChange={handleSelectAction}
    />
  );
}

export default SelectAction;
