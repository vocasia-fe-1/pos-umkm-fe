import { forwardRef } from "react";
import { inputClassName } from "@/utils";

export const InputText = forwardRef(({ size, ...props }, ref) => {
  return (
    <input
      {...props}
      data-testid="input-text"
      className={inputClassName({ size, ...props })}
      ref={ref}
      id={props.name}
    />
  );
});

InputText.displayName = "InputText";
