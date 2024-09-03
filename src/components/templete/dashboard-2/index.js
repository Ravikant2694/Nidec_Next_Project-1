import React, { useState } from "react";
import { Router, useRouter } from "next/router";

export const Dashboard2Template = () => {
  const [file, setFile] = useState();
  const router = useRouter();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const handleClick = () => {
    if (file) {
      router.push("/dashboard-3");
    }
  };
  return (
    <div className="flex bg-gray-100">
      {/* left navbar */}

      <div className="flex flex-col justify-start text-center h-screen w-[240px]">
        <div className="h-[70px] w-[240px] pt-[26px] pr-[26px] pb-[18px] pl-[29px] border-2 border-gray-300 bg-white">
          <img src="images/nidec_heading.png"></img>
        </div>

        <div className="flex flex-col justify-between h-screen bg-black opacity-80 ">
          <div className="flex flex-col">
            <div className="h-[61px] w-[239px] poppins-semibold flex  border-l-4 border-green-500  items-center text-green-500">
              <span className="pl-[20px] pr-[20px]">
                <i class="bi bi-upload"></i>
              </span>
              <a href="#">Upload Client Data</a>
            </div>

            <div className="h-[61px] w-[239px] poppins-semibold flex items-center  text-gray-400 mt-[5px] mb-[5px]">
              <span className="pl-[20px] pr-[20px]">
                <i class="bi bi-download"></i>
              </span>
              <a href="#">Download Results</a>
            </div>

            <div className="h-[61px] w-[239px] poppins-semibold flex items-center  text-gray-400">
              <span className="pl-[20px] pr-[20px]">
                <i class="bi bi-list-ul"></i>
              </span>
              <a href="#">Customer Rules</a>
            </div>
          </div>

          <div className="h-[61px] w-[239px] poppins-semibold flex justify-center items-center border-t-2 border-gray-700  text-white mb-[88px] pt-4">
            Logout
          </div>
        </div>
      </div>

      {/* right portion */}
      <div className="flex flex-col w-full">
        {/* right portion-1 */}
        <div className="flex w-full h-[70px] justify-end items-center border-2 border-gray-300 shadow-md bg-white">
          <div className="border-2 border-gray-500 rounded-full h-[52px] w-[50px] p-1 bg-gray-100">
            <img src="/images/women_image.png"></img>
          </div>
          <div className="flex flex-col mr-[12px] ml-[16px]">
            <h5 className="poppins-bold text-[14px]">Username</h5>
            <p className="poppins-semibold text-[12px] text-gray-500">Admin</p>
          </div>
          <div className="h-[40px] w-[40px] border-3 border-gray-500 rounded-full mr-[31px]">
            <img
              className="h-[38px] w-[38px]"
              src="/images/drop_arrow.png"
            ></img>
          </div>
        </div>

        {/* right portion-2 */}

        <div className=" flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
          Upload Client data
        </div>

        {/* right portion-3 */}

        <div className="bg-white ml-[20px] mr-[20px]">
          <div className="flex flex-col justify-center items-center pt-10 pb-10">
            <p className="poppins-regular text-xl">
              Your file is being processed...
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
              {/* upload file */}
              <div className="App">
                <label className=" poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 ">
                  <input
                    type="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                  SELECT FILE
                </label>
                {file && <p className="mt-4">{file.name}</p>}
                {""}
              </div>
              {/* upload file */}
            </div>
            <div className=" text-center poppins-regular">
              <p className="mt-[48px]">File added</p>
              <img src="images/file_upload.png"></img>
            </div>
          </div>

          <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
            <button
              className=" border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
              type="submit"
            >
              Cancel
            </button>
            <button
              className=" pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg text-white bg-green-500 poppins-regular"
              type="button"
              onClick={handleClick}
            >
              Process File
            </button>
          </div>
        </div>
      </div>
      {/* right portion */}

      {/* container end */}
    </div>
  );
};
