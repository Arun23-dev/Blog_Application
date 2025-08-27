import React from "react";

export function Badge({ children, className = "", variant = "default" }) {
  const baseClasses = "px-2 py-1 rounded text-sm font-medium";
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-teal-100 text-teal-800",
    outline: "border bg-transparent text-gray-800",
  };
  return (
    <span className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`}>
      {children}
    </span>
  );
}
