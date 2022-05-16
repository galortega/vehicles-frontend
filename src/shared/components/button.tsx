import React from "react";
import { classNames } from "../utils";

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled: boolean;
}> = ({ children, className }) => (
  <button
    type="button"
    className={classNames(
      `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${className}`
    )}
  >
    {children}
  </button>
);

export const PageButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled: boolean;
}> = ({ children, className }) => (
  <button
    type="button"
    className={classNames(
      `relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 + ${className}`
    )}
  >
    {children}
  </button>
);