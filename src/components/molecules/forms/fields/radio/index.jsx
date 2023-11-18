import { InputRadio, Fieldset } from "@/components";
import { forwardRef } from "react";

export const FieldRadio = forwardRef((props, ref) => {
  return (
    <Fieldset type="checkbox" {...props}>
      <InputRadio {...props} ref={ref} />
    </Fieldset>
  );
});

FieldRadio.displayName = "FieldRadio";
