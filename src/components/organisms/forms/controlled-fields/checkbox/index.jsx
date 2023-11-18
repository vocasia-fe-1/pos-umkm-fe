import { useController } from "react-hook-form";
import { FieldCheckbox } from "@/components";

export const ControlledFieldCheckbox = (props) => {
  const { field } = useController(props);
  return <FieldCheckbox {...{ ...props, ...field }} />;
};
