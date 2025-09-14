// import React from "react"

// export function Button({ children, className = "", ...props }) {
//   return (
//     <button
//       className={`px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800 transition ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }


import React from "react";

// Simple utility to merge classes
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Variants and sizes
const VARIANT_CLASSES = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const SIZE_CLASSES = {
  sm: "h-9 px-3 rounded-md",
  md: "h-10 px-4 rounded-md",
  lg: "h-11 px-6 rounded-md",
};

export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  const buttonClass = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:ring-destructive/20",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
