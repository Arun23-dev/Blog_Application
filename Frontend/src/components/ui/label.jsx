export function Label({ htmlFor, children, srOnly = false, className = "", ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${srOnly ? "sr-only" : "block text-sm font-medium text-gray-700"} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
