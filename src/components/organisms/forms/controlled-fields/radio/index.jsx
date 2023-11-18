import { useController } from "react-hook-form";
import { FieldRadio } from "@/components";

export const ControlledFieldRadio = (props) => {
  const { field } = useController(props);
  return <FieldRadio {...{ ...props, ...field }} />;
};
