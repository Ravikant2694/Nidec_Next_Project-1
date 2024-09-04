import DashboardLayout from "@/components/templete/dashboard";
import { useRouter } from "next/router";
import React, { useState } from "react";

const UploadClient = () => {
  const [file, setFile] = useState();
  const router = useRouter(); // Initialize the useRouter hook
  const [show, setShow] = useState(false);
  const [finalShow, setFinalShow] = useState(false);
  function handleChange(e) {
    setFile(e.target.files[0]); // Store the file object
  }

  const handleClick = () => {
    setShow(false);
    if (file) {
      // Navigate to the next page if the file is uploaded
      setShow(true); // Replace with your actual route
    } else {
      alert("Please Select File");
    }
  };

  const handleProceesClick = () => {
    setShow(false);
    setFinalShow(true);
  };
  return (
    <div>
      <DashboardLayout>
        {!show && !finalShow && (
          <>
            <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
              Upload Client data
            </div>
            <div className="bg-white ml-[20px] mr-[20px]">
              <div className="flex flex-col justify-center items-center pt-10 pb-10 bg-white">
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

                  <div className="App mt-8">
                    <label className="mt-8 poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 hover:bg-green-500 hover:text-white ">
                      <input
                        type="file"
                        onChange={handleChange}
                        className="hidden"
                      />
                      Select file
                    </label>
                    {file && <p className="mt-4">{file.name}</p>}{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
                <button
                  className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className={`border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg ${
                    file
                      ? "text-white bg-green-500 border-transparent"
                      : "text-gray-500"
                  } poppins-regular`}
                  type="button"
                  onClick={handleClick}
                >
                  Process File
                </button>
              </div>
            </div>
            <div />
          </>
        )}

        {show && !finalShow && (
          <>
            <div className=" flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
              Upload Client data
            </div>
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
                  onClick={handleProceesClick}
                >
                  Process File
                </button>
              </div>
            </div>
          </>
        )}

        {finalShow && <>
          <div className=" flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
          Upload Client data
        </div>
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
                type="button"
                className="border-[3px] border-gray-300  pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 hover:bg-green-500 hover:text-white"
                onClick={() => router.push("/download-results")}
              >
                Go To Download Results Page
              </button>
            </div>
          </div>
        </div>
        </>}
      </DashboardLayout>
    </div>
  );
};

export default UploadClient;
