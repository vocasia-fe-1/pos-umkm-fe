import { Label } from "@/components";
import { clsx } from "clsx";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import { match } from "ts-pattern";

export const Fieldset = (props) => {
  const { status = "none" } = props;

  const className = clsx("text-xs flex items-center gap-x-1 mt-[-5px]", {
    "text-red-400": status === "error",
    "text-green-400": status === "success",
    "text-gray-400": status === "none",
    "text-yellow-400": status === "warning",
  });

  const inputType = match(props.type)
    .with("checkbox", () => (
      <section className="flex flex-col gap-y-2">
        {props?.label && (
          <Label
            htmlFor={props.name}
            disabled={props.disabled}
            size={props.size}
            required={props.required}
          >
            {props.label}
          </Label>
        )}
        <section className="flex gap-x-2">
          {props.children}
          {props?.text && (
            <Label id={props.name} htmlFor={props.name} disabled={props.disabled} size={props.size}>
              {props.text}
            </Label>
          )}
        </section>
      </section>
    ))
    .with("radio", () => (
      <section className="flex flex-col gap-y-1">
        {props?.label && (
          <Label
            htmlFor={props.name}
            disabled={props.disabled}
            size={props.size}
            required={props.required}
          >
            {props.label}
          </Label>
        )}
        <div className="flex gap-x-4">{props.children}</div>
      </section>
    ))

    .otherwise(() => (
      <section className="relative flex flex-col gap-y-2">
        {props?.label && (
          <Label
            htmlFor={props.name}
            disabled={props.disabled}
            size={props.size}
            required={props.required}
          >
            {props.label}
          </Label>
        )}
        {props?.preppend && (
          <div className="flex items-center gap-x-2 absolute top-3 left-3">{props.preppend}</div>
        )}
        {props.children}
        {props?.append && (
          <div className="flex items-center gap-x-2 absolute top-3 right-3">{props.append}</div>
        )}
      </section>
    ));

  const statusIcon = match(status)
    .with("error", () => <BiErrorCircle />)
    .with("success", () => <BiCheckCircle />)
    .with("warning", () => <BiErrorCircle />)
    .with("none", () => null)
    .exhaustive();

  return (
    <fieldset className="flex flex-col gap-y-2">
      {inputType}
      {props.message && status !== "none" && (
        <span className={className}>
          {statusIcon}
          {props.message}
        </span>
      )}
      {props?.hint && <span className="text-xs text-gray-400 mt-[-6px] italic">*{props.hint}</span>}
    </fieldset>
  );
};
