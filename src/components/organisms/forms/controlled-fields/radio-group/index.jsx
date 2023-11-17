import { useController } from "react-hook-form";
import { FieldRadioGroup } from "@/components";

export const ControlledFieldRadioGroup = (props) => {
  const { field } = useController(props);
  return <FieldRadioGroup {...{ ...props, ...field }} />;
};
