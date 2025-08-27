// src/components/ui/checkbox.jsx
import React from "react";

export function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-teal-500"
    />
  );
}
