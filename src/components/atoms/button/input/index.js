import React from "react";

export const InputField = ({ Title, Type, id, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="text-[19px] poppins-medium mb-[5px]" htmlFor={id}>
        {Title}
      </label>
      <input
        className="w-full h-[61px] pt-[13px] pr-[19px] pb-[13px] pl-[19px] border-2 rounded-[11px]"
        type={Type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
