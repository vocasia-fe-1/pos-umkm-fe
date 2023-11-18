import { InputText, Fieldset } from "@/components";
import { forwardRef } from "react";

export const FieldText = forwardRef(({ size, ...props }, ref) => {
  return (
    <Fieldset size={size} {...props}>
      <InputText {...props} ref={ref} size={size} />
    </Fieldset>
  );
});

FieldText.displayName = "FieldText";
