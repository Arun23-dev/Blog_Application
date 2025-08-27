import React, { useState, useEffect, forwardRef } from "react";

/**
 * Accessible Switch component
 *
 * Props:
 *  - id
 *  - checked (controlled)
 *  - defaultChecked (uncontrolled)
 *  - onChange (DOM event)
 *  - onCheckedChange (convenience callback with boolean)
 *  - disabled
 *  - className
 *
 * Usage: supports both controlled and uncontrolled patterns.
 */
export const Switch = forwardRef(function Switch(
  {
    id,
    checked,
    defaultChecked = false,
    onChange,
    onCheckedChange,
    disabled = false,
    className = "",
    ...props
  },
  ref
) {
  const isControlled = typeof checked !== "undefined";
  const [internal, setInternal] = useState(!!defaultChecked);
  const isOn = isControlled ? !!checked : internal;

  // sync internal state if controlled prop changes
  useEffect(() => {
    if (isControlled) {
      setInternal(!!checked);
    }
  }, [checked, isControlled]);

  const handleChange = (e) => {
    const next = e.target.checked;
    if (!isControlled) setInternal(next);
    if (typeof onChange === "function") onChange(e);
    if (typeof onCheckedChange === "function") onCheckedChange(next);
  };

  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center cursor-pointer select-none ${disabled ? "opacity-60 pointer-events-none" : ""
        } ${className}`}
    >
      {/* visually-hidden checkbox for accessibility */}
      <input
        ref={ref}
        id={id}
        type="checkbox"
        role="switch"
        aria-checked={isOn}
        checked={isOn}
        onChange={handleChange}
        disabled={disabled}
        className="sr-only"
        {...props}
      />

      {/* track */}
      <span
        className={`relative inline-block w-11 h-6 rounded-full transition-colors duration-200 ${isOn ? "bg-teal-600" : "bg-gray-300"}`}
        aria-hidden="true"
      >
        {/* thumb */}
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${isOn ? "translate-x-5" : "translate-x-0"
            }`}
        />
      </span>
    </label>
  );
});

/**
 * Optional small label that can sit next to the switch
 */
export function SwitchLabel({ children, className = "", ...props }) {
  return (
    <span className={`ml-3 text-sm text-gray-700 ${className}`} {...props}>
      {children}
    </span>
  );
}
