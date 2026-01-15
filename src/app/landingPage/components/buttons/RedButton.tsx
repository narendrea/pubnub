import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const RedButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-red-600 
        text-white 
        px-4 
        py-2 
        rounded-md 
        font-medium
        hover:bg-red-700
        disabled:bg-red-300
        disabled:cursor-not-allowed
        transition
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default RedButton;
