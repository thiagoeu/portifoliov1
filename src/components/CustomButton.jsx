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
      className={`bg-gray-900 hover:bg-blue-700 text-white flex items-center gap-2 font-bold py-2 px-4 rounded transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
