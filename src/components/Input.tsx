import React from "react";
import { FaEnvelope } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  labelText?: React.ReactNode;
  error?: string;
  className?: string;
}

const Input = ({ className, icon, labelText, error, ...props }: InputProps) => {
  return (
    <div>
      {labelText && <label className={`mb-2 block text-sm font-medium text-gray-900`}>{labelText}</label>}
      <div className="relative">
        {icon && (
          <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500`}>
            {icon}
          </div>
        )}
        <input
          className={`block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ${icon && "pr-10"
          } ${error && "border-red-500"} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
