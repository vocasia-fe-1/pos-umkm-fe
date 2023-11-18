import { InputRadio, Fieldset, Label } from "@/components";
import { forwardRef } from "react";

export const FieldRadioGroup = forwardRef((props, ref) => {
  return (
    <Fieldset type="radio" {...props}>
      {props.options?.map((option, key) => (
        <div className="flex gap-x-2" key={key}>
          <InputRadio key={key} value={option.value} {...props} ref={ref} />
          <Label size={props.size} className="text-gray-400 font-medium">
            {option.label}
          </Label>
        </div>
      ))}
    </Fieldset>
  );
});

FieldRadioGroup.displayName = "FieldRadioGroup";
