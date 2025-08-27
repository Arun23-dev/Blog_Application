
import React from "react";

// Main Avatar wrapper
export function Avatar({ children, className = "", ...props }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Avatar image
export function AvatarImage({ src, alt, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  );
}

// Fallback when image is missing
export function AvatarFallback({ children, className = "", ...props }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
