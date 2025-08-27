import React from "react";

/**
 * Separator
 *
 * Props:
 *  - orientation: "horizontal" | "vertical"  (default: "horizontal")
 *  - thickness: string (CSS size, e.g. "1px", "2px") — defaults to "1px"
 *  - color: string (tailwind color class or css color) — defaults to Tailwind gray
 *  - className: extra classes to apply
 *
 * The component renders a semantic separator with proper aria-orientation.
 */
export function Separator({
  orientation = "horizontal",
  thickness = "1px",
  color = "bg-gray-200",
  className = "",
  ...props
}) {
  const isVertical = orientation === "vertical";

  const baseClass = isVertical
    ? `inline-block ${color} ${className}`
    : `block ${color} ${className}`;

  const style = isVertical
    ? { width: thickness, height: "100%" }
    : { height: thickness, width: "100%" };

  return (
    <div
      role="separator"
      aria-orientation={isVertical ? "vertical" : "horizontal"}
      className={baseClass}
      style={style}
      {...props}
    />
  );
}
