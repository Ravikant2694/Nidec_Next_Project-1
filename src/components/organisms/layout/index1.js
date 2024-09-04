import React from "react";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-start text-center h-screen w-[240px]">
      {/* top image */}
      <div className="h-[70px] w-[240px] pt-[26px] pr-[26px] pb-[18px] pl-[29px] border-2 border-gray-300 bg-white">
        <img src="images/nidec_heading.png" alt="Nidec Heading"></img>
      </div>
      {/* sidebar */}
      <div className="flex flex-col justify-between h-screen bg-black opacity-80 ">
        <div className="flex flex-col">
          <div className="h-[61px] w-[239px] poppins-semibold flex  items-center text-gray-400 hover:text-green-500 transition-colors duration-300 hover:border-l-4 border-l-4 border-black hover:border-green-500 ">
            <span className="pl-[20px] pr-[20px] ">
              <i className="bi bi-upload"></i>
            </span>
            <button type="button" onClick={() => router.push("/upload-client-data")}>
              Upload Client Data
            </button>
          </div>
          <div className="h-[61px] w-[239px] poppins-semibold flex items-center  text-gray-400 mt-[5px] mb-[5px]  hover:text-green-500 transition-colors duration-300 hover:border-l-4 border-l-4 border-black hover:border-green-500">
            <span className="pl-[20px] pr-[20px]">
              <i className="bi bi-download"></i>
            </span>
            <button
              className="hover:text-green-500 transition-colors duration-300"
              type="button"
              onClick={() => router.push("/download-results")}
            >
              Download Results
            </button>
          </div>
          <div className="h-[61px] w-[239px] poppins-semibold flex items-center  text-gray-400  hover:text-green-500 transition-colors duration-300 hover:border-l-4 border-l-4 border-black hover:border-green-500">
            <span className="pl-[20px] pr-[20px]">
              <i className="bi bi-list-ul"></i>
            </span>
            <button
              className="hover:text-green-500 transition-colors duration-300"
              type="button"
              onClick={() => router.push("/customer-rules")}
            >
              Customer Rules
            </button>
          </div>
        </div>
        <div className="h-[61px] w-[239px] poppins-semibold flex justify-center items-center border-t-2 border-gray-700  text-white mb-[88px] pt-4">
          <button
            className="hover:text-green-500"
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
