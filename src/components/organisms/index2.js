import React from "react";

export const Profile = () => {
  return (
    <div className="flex w-full h-[70px] justify-end items-center border-2 border-gray-300 shadow-md bg-white">
      <div className=" w-[52px] h-[50px] border-gray-500 rounded-full bg-gray-100 overflow-hidden">
        <img
          className="h-[50px] w-[52px] border-none object-cover object-center"
          src="/images/boy_image_background.jpg"
          alt="Profile"
        />
      </div>

      <div className="flex flex-col mr-[12px] ml-[16px]">
        <h5 className="poppins-bold text-[14px]">Username</h5>
        <p className="poppins-semibold text-[12px] text-gray-500">Admin</p>
      </div>

      <div className="h-[40px] w-[40px] border-3 border-gray-500 rounded-full mr-[31px]">
        <img
          className="h-[38px] w-[38px]"
          src="/images/drop_arrow.png"
          alt="Dropdown Arrow"
        ></img>
      </div>
    </div>
  );
};
