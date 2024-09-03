import React from "react";
import { Layout } from "@/components/organisms/layout";

export const Upload2Template = () => {
  return (
    <div className="h-screen overflow-auto">
      <Layout />
      <div className="flex flex-col justify-center items-center mt-[150px] pt-10 pb-10">
        <p className="poppins-regular text-xl">
          Please Upload your Excel Sheet Here
        </p>
        <div className="flex flex-row justify-center text-center items-center border-dashed border-2 border-green-400 text-center mt-10 pt-[20px] pr-[30px] pb-[20px] pl-[30px] rounded-[12px] ">
          <span className="arrow">
            <img src="/images/arrow_image.png" alt="arrow_image"></img>
          </span>
          <div className="ml-[35px] mr-[71px]">
            <p className="mt-1 mb-3 poppins-regular">
              Select a file or drag and drop here
            </p>
            <p className="poppins-regular text-gray-500">
              Only .xlsx extensions can be processed
            </p>
          </div>
          <button
            className=" poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 "
            type="submit"
          >
            SELECT FILE
          </button>
        </div>
        <div className=" text-center poppins-regular">
          <p className="mt-[48px]">File added</p>
          <img src="images/file_upload.png"></img>
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
          className=" pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg text-white bg-green-500 poppins-regular"
          type="submit"
        >
          Process File
        </button>
      </div>
    </div>
  );
};
