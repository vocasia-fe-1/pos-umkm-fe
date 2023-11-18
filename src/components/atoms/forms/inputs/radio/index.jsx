import { forwardRef } from "react";

export const InputRadio = forwardRef((props, ref) => {
  return <input type="radio" data-testid="input-radio" {...props} ref={ref} />;
});

InputRadio.displayName = "InputRadio";
