import React from "react";

const CustomButton = ({
  type = "button",
  children = "Custom Button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 rounded bg-gray-900 px-4 py-2 font-bold text-white transition duration-200 hover:cursor-pointer hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
