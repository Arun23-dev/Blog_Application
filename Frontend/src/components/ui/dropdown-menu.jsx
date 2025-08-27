import React, { useState, createContext, useContext } from "react";

// Context to share menu state
const DropdownMenuContext = createContext();

export function DropdownMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ children, asChild = false }) {
  const { setIsOpen } = useContext(DropdownMenuContext);

  const child = React.Children.only(children);
  const handleClick = () => setIsOpen((prev) => !prev);

  if (asChild) {
    return React.cloneElement(child, { onClick: handleClick });
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children, className = "", align = "start" }) {
  const { isOpen, setIsOpen } = useContext(DropdownMenuContext);

  if (!isOpen) return null;

  const alignmentClass =
    align === "end" ? "right-0" : align === "center" ? "left-1/2 transform -translate-x-1/2" : "left-0";

  return (
    <div
      className={`absolute z-10 mt-2 w-48 bg-white border rounded shadow ${alignmentClass} ${className}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick, className = "" }) {
  return (
    <div
      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
