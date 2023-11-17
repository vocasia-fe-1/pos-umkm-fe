import { forwardRef } from "react";

export const InputCheckbox = forwardRef((props, ref) => {
  return (
    <input type="checkbox" data-testid="input-checkbox" {...props} id={props.name} ref={ref} />
  );
});

InputCheckbox.displayName = "InputCheckbox";
