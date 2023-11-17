import clsx from "clsx";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
  const { isLoading = false, variant = "primary", size = "md" } = props;

  const className = clsx(
    "rounded-lg border hover:opacity-80 w-full",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white active:opacity-100",
    {
      "bg-blue-500 text-white": variant === "primary",
      "bg-white text-blue-500 border-blue-500": variant === "secondary",
      "bg-red-500 text-white": variant === "error",
      "bg-white text-gray-600 border-gray-600": variant === "cancel",
      "bg-yellow-500 text-white": variant === "warning",
      "bg-green-500 text-white": variant === "success",
    },
    {
      "px-3 py-2 text-sm": size === "sm",
      "px-4 py-2 text-base": size === "md",
      "px-6 py-3 text-base": size === "lg",
    },
    {
      "opacity-50": isLoading,
    },
  );

  return (
    <Fragment>
      {props.href ? (
        <Link href={props.href}>
          <button data-testid="button" className={className} {...props}>
            {isLoading ? "Loading..." : props.children}
          </button>
        </Link>
      ) : (
        <button data-testid="button" className={className} {...props}>
          {isLoading ? "Loading..." : props.children}
        </button>
      )}
    </Fragment>
  );
};
