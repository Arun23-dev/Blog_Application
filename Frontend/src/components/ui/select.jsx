import React, { useState } from "react";

export function Select({ children, value, onValueChange, className = "" }) {
  return <div className={`relative inline-block ${className}`}>{children}</div>;
}

export function SelectTrigger({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      className={`border rounded px-3 py-2 w-full text-left ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SelectValue({ value, placeholder = "Select...", className = "" }) {
  return <span className={className}>{value || placeholder}</span>;
}
SelectValue

export function SelectContent({ children, className = "" }) {
  return <div className={`absolute mt-1 w-full border bg-white rounded shadow ${className}`}>{children}</div>;
}

export function SelectItem({ value, onSelect, children, className = "" }) {
  return (
    <div
      className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${className}`}
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  );
}
