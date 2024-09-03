import React from "react";
import { Layout } from "@/components/organisms/layout";

export const Upload3Template = () => {
  return (
    <div className="h-screen overflow-auto">
      <Layout />
      <div className="flex flex-col justify-center items-center mt-[150px]">
        <div className="flex flex-col justify-center items-center">
          <p className="poppins-regular text-4xl">Success!</p>
          <p className="poppins-regular text-lg text-gray-500 mt-[27px] mb-[40px]">
            Documents uploaded successfully! Check the <br></br> Download
            Results page to see the results.
          </p>
        </div>
        <div className="poppins-regular text-[24px]">
          <button
            type="submit"
            className="border-2 border-gray-500 pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 shadow-[3px_3px_3px_#aaaaaa]"
          >
            Go To Download Results Page
          </button>
        </div>
      </div>
    </div>
  );
};
