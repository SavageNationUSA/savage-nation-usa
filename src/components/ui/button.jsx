import React from "react";

const Button = React.forwardRef(
  ({ className, size, ...props }, ref) => {
    const sizeClasses = {
      lg: "px-8 h-11 text-lg",
      md: "px-4 py-2 h-10 text-base",
      sm: "px-3 h-9 text-sm",
    };

    const classes = `
      inline-flex items-center justify-center rounded-md font-medium
      text-white bg-blue-500 hover:bg-blue-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      disabled:opacity-50 disabled:pointer-events-none
      ${sizeClasses[size] || sizeClasses.md}
      ${className}
    `;

    return (
      <button
        className={classes.trim()}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
