import React from "react";

// Card container
export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Header
export function CardHeader({ className = "", children, ...props }) {
  return (
    <div
      className={`p-4 border-b border-border bg-card-header text-card-foreground ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Title
export function CardTitle({ className = "", children, ...props }) {
  return (
    <h2
      className={`text-lg font-semibold text-foreground dark:text-foreground ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

// Card Content
export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Card Description
export function CardDescription({ children, className = "", ...props }) {
  return (
    <p
      className={`mt-1 text-sm text-muted-foreground dark:text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
