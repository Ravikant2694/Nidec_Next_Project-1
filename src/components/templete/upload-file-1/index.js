import React from "react";
import { Layout } from "@/components/organisms/layout";

export const Upload1Template = () => {
  return (
    <div className="h-screen overflow-auto">
      <Layout />
      <div className="flex flex-col justify-center items-center mt-[150px] pt-10 pb-10">
        <p className="poppins-regular text-xl">
          Please Upload your Excel Sheet Here
        </p>
        <div className="flex flex-col justify-center items-center border-dashed border-2 border-gray-00 text-center mt-10 pt-10 pb-10 pl-20 pr-20">
          <span className="arrow">
            <img src="/images/arrow_image.png" alt="arrow_image"></img>
          </span>
          <p className="mt-1 mb-3 poppins-regular">
            Select a file or drag and drop here
          </p>
          <p className="poppins-regular text-gray-500">
            Only .xlsx extensions can be processed
          </p>
          <button
            className="mt-8 poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 "
            type="submit"
          >
            SELECT FILE
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-[104px] mt-10">
        <button
          className=" border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
          type="submit"
        >
          Cancel
        </button>
        <button
          className="border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg text-gray-500 poppins-regular"
          type="submit"
        >
          Process File
        </button>
      </div>
    </div>
  );
};
