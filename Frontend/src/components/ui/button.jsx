import React from "react"

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
