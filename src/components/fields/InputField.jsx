import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="my-4">
      <label className="text-lg">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-16 text-lg p-3 shadow-md focus:outline-none rounded-lg "
      />
    </div>
  );
};

export default InputField;
