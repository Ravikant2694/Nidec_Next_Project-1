import React from "react";

export const InputField = ({ type, name, placeholder, label }) => {
  return (
    <div>
      <form>
        <label className="not-italic">{label}</label>
        <input type={type} name={name} placeholder={placeholder}></input>
      </form>
    </div>
  );
};


