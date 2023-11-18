import { clsx } from "clsx";

export const Label = (props) => {
  const className = clsx(
    "flex gap-x-1 text-gray-500 select-none font-medium cursor-pointer",
    {
      "text-sm": props.size === "sm",
      "text-base": props.size === "md",
      "text-lg": props.size === "lg",
    },
    {
      "text-gray-400 cursor-not-allowed opacity-50": props.disabled,
    },
    props.className,
  );

  return (
    <label data-testid="label" className={className} {...props}>
      {props.children}
      {props.required && (
        <span data-testid="required" className="text-red-700">
          *
        </span>
      )}
    </label>
  );
};
