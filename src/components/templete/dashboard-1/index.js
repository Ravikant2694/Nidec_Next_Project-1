import { useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js

export const Dashboard1Template = () => {
  const [file, setFile] = useState();
  const router = useRouter(); // Initialize the useRouter hook

  function handleChange(e) {
    setFile(e.target.files[0]); // Store the file object
  }

  const handleClick = () => {
    if (file) {
      // Navigate to the next page if the file is uploaded
      router.push("/dashboard-2"); // Replace with your actual route
    }
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex bg-gray-100">
      {/* left navbar */}
      <div className="flex flex-col justify-start text-center h-screen w-[240px]">
        <div className="h-[70px] w-[240px] pt-[26px] pr-[26px] pb-[18px] pl-[29px] border-2 border-gray-300 bg-white">
          <img src="images/nidec_heading.png" alt="Nidec Heading"></img>
        </div>

        <div className="flex flex-col justify-between h-screen bg-black opacity-80 ">
          <div className="flex flex-col">
            <div className="h-[61px] w-[239px] poppins-semibold flex  border-l-4 border-green-500  items-center text-green-500">
              <span className="pl-[20px] pr-[20px]">
                <i className="bi bi-upload"></i>
              </span>
              <a href="#">Upload Client Data</a>
            </div>
            <div className="h-[61px] w-[239px] poppins-semibold flex items-center  text-gray-400 mt-[5px] mb-[5px]">
              <span className="pl-[20px] pr-[20px]">
                <i className="bi bi-download"></i>
              </span>
              <a href="#">Download Results</a>
            </div>
            <div className="h-[61px] w-[239px] poppins-semibold flex items-center  text-gray-400">
              <span className="pl-[20px] pr-[20px]">
                <i className="bi bi-list-ul"></i>
              </span>
              <a href="#">Customer Rules</a>
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

      {/* right portion */}
      <div className="flex flex-col w-full">
        {/* right portion-1 */}
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

        {/* right portion-2 */}

        <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
          Upload Client data
        </div>

        {/* right portion-3 */}

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
              {/* upload file */}
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
                {/* Display file name */}
              </div>
              {/* upload file */}
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
      </div>
      {/* right portion */}

      {/* container end */}
    </div>
  );
};
