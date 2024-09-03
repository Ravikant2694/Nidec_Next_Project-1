import React from "react";

export const Dashboard3Template = () => {
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

        <div className=" max-h-[500px] h-[500px] flex justify-center bg-white mr-[20px] ml-[20px]">
          <div className="flex flex-col justify-center items-center">
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
                className="border-[3px] border-gray-300  pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500"
              >
                Go To Download Results Page
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* right portion */}

      {/* container end */}
    </div>
  );
};
