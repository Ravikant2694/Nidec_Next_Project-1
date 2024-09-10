import React from "react";

export const Button = ({ handleClearAllClick }) => {
  return (
    <div className="h-[37px] w-[97px] flex justify-center items-center rounded-[10px] text-[14px] poppins-medium bg-green-500 hover:bg-[#0AA546] text-white">
      <button type="button" onClick={handleClearAllClick}>
        Clear All
      </button>
    </div>
  );
};
