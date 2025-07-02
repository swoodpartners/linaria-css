import React from "react";

import { buttonCVA } from "./Button.style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * Button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Button variant style
   */
  variant?: "accent" | "link";
  /**
   * Button size
   */
  size?: "sm" | "lg";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  variant = "accent",
  size = "sm",
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      className={buttonCVA({ variant, size, className })}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
