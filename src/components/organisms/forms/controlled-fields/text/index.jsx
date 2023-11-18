import { useController } from "react-hook-form";
import { FieldText } from "@/components";

export const ControlledFieldText = (props) => {
  const { field } = useController(props);
  return <FieldText {...{ ...props, ...field }} />;
};
