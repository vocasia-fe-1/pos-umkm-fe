import { InputCheckbox, Fieldset } from "@/components";
import { forwardRef } from "react";

export const FieldCheckbox = forwardRef((props, ref) => {
  return (
    <Fieldset type="checkbox" {...props}>
      <InputCheckbox {...props} ref={ref} />
    </Fieldset>
  );
});

FieldCheckbox.displayName = "FieldCheckbox";
