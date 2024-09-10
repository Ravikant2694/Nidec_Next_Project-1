// import DashboardLayout from "@/components/templete/dashboard";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const UploadClient = () => {
//   const router = useRouter(); // Initialize the useRouter hook
//   const [file, setFile] = useState();
//   const [show, setShow] = useState(false);
//   const [finalShow, setFinalShow] = useState(false);

//   // Function to handle file selection
//   function handleChange(e) {
//     setFile(e.target.files[0]); // Store the file object
//   }

//   // Function to handle file processing click
//   const handleClick = () => {
//     setShow(false);
//     if (file) {
//       setShow(true); // Show the next section if file is selected
//     } else {
//       alert("Please Select File");
//     }
//   };

//   // Function to handle processing click
//   const handleProceesClick = () => {
//     setShow(false);
//     setFinalShow(true);
//   };

//   // Cancel button handler to reset the file state
//   const handleCancel = () => {
//     setFile(null); // Clear the file state
//     setShow(false); // Reset show state to hide sections
//     setFinalShow(false); // Reset final show state
//   };

//   return (
//     <div>
//       <DashboardLayout>
//         {!show && !finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10 bg-white">
//                 <p className="poppins-regular text-xl">
//                   Please Upload your Excel Sheet Here
//                 </p>
//                 <div className="flex flex-col justify-center items-center border-dashed border-2 border-gray-00 text-center mt-10 pt-10 pb-10 pl-20 pr-20">
//                   <span className="arrow">
//                     <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                   </span>
//                   <p className="mt-1 mb-3 poppins-regular">
//                     Select a file or drag and drop here
//                   </p>
//                   <p className="poppins-regular text-gray-500">
//                     Only .xlsx extensions can be processed
//                   </p>

//                   <div className="App mt-8">
//                     <label className="mt-8 poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 hover:bg-green-500 hover:text-white ">
//                       <input
//                         type="file"
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       Select file
//                     </label>
//                     {file && <p className="mt-4">{file.name}</p>}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className={`border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg ${
//                     file
//                       ? "text-white bg-green-500 border-transparent"
//                       : "text-gray-500"
//                   } poppins-regular`}
//                   type="button"
//                   onClick={handleClick}
//                 >
//                   Process File
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {show && !finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10">
//                 <p className="poppins-regular text-xl">
//                   Your file is being processed...
//                 </p>
//                 <div className="flex flex-row justify-center text-center items-center border-dashed border-2 border-green-400 text-center mt-10 pt-[20px] pr-[30px] pb-[20px] pl-[30px] rounded-[12px] ">
//                   <span className="arrow">
//                     <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                   </span>
//                   <div className="ml-[35px] mr-[71px]">
//                     <p className="mt-1 mb-3 poppins-regular">
//                       Select a file or drag and drop here
//                     </p>
//                     <p className="poppins-regular text-gray-500">
//                       Only .xlsx extensions can be processed
//                     </p>
//                   </div>
//                   {/* Upload file */}
//                   <div className="App">
//                     <label className="poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 ">
//                       <input
//                         type="file"
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       SELECT FILE
//                     </label>
//                     {file && <p className="mt-4">{file.name}</p>}
//                   </div>
//                   {/* Upload file */}
//                 </div>
//                 <div className="text-center poppins-regular">
//                   <p className="mt-[48px]">File added</p>
//                   <img src="images/file_upload.png" alt="file_upload"></img>
//                 </div>
//               </div>

//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg text-white bg-green-500 poppins-regular"
//                   type="button"
//                   onClick={handleProceesClick}
//                 >
//                   Process File
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="max-h-[500px] h-[500px] flex justify-center bg-white mr-[20px] ml-[20px]">
//               <div className="flex flex-col justify-center items-center">
//                 <div className="flex flex-col justify-center items-center">
//                   <p className="poppins-regular text-4xl">Success!</p>
//                   <p className="poppins-regular text-lg text-gray-500 mt-[27px] mb-[40px]">
//                     Documents uploaded successfully! Check the <br></br> Download
//                     Results page to see the results.
//                   </p>
//                 </div>
//                 <div className="poppins-regular text-[24px]">
//                   <button
//                     type="button"
//                     className="border-[3px] border-gray-300 pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 hover:bg-green-500 hover:text-white"
//                     onClick={() => router.push("/download-results")}
//                   >
//                     Go To Download Results Page
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </DashboardLayout>
//     </div>
//   );
// };

// export default UploadClient;

// success

// import DashboardLayout from "@/components/templete/dashboard";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const UploadClient = () => {
//   const router = useRouter(); // Initialize the useRouter hook
//   const [file, setFile] = useState();
//   const [show, setShow] = useState(false);
//   const [finalShow, setFinalShow] = useState(false);
//   const [progress, setProgress] = useState(0); // State to track progress

//   // Function to handle file selection
//   function handleChange(e) {
//     setFile(e.target.files[0]); // Store the file object
//   }

//   // Function to handle file processing click
//   const handleClick = () => {
//          setShow(false);
//          if (file) {
//            setShow(true); // Show the next section if file is selected
//          } else {
//            alert("Please Select File");
//          }
//        };

//   // Function to simulate progress
//   const simulateProgress = () => {
//     let progressInterval = 0;

//     const interval = setInterval(() => {
//       progressInterval += 10;
//       setProgress(progressInterval);

//       if (progressInterval >= 100) {
//         clearInterval(interval);
//         setShow(false);
//         setFinalShow(true); // Show final success section after progress is complete
//       }
//     }, 500); // Update every 500ms
//   };

//   // Cancel button handler to reset the file state
//   const handleCancel = () => {
//     setFile(null); // Clear the file state
//     setShow(false); // Reset show state to hide sections
//     setFinalShow(false); // Reset final show state
//     setProgress(0); // Reset progress
//   };

//   return (
//     <div>
//       <DashboardLayout>
//         {!show && !finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10 bg-white">
//                 <p className="poppins-regular text-xl">
//                   Please Upload your Excel Sheet Here
//                 </p>
//                 <div className="flex flex-col justify-center items-center border-dashed border-2 border-gray-00 text-center mt-10 pt-10 pb-10 pl-20 pr-20">
//                   <span className="arrow">
//                     <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                   </span>
//                   <p className="mt-1 mb-3 poppins-regular">
//                     Select a file or drag and drop here
//                   </p>
//                   <p className="poppins-regular text-gray-500">
//                     Only .xlsx extensions can be processed
//                   </p>

//                   <div className="App mt-8">
//                     <label className="mt-8 poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 hover:bg-green-500 hover:text-white ">
//                       <input
//                         type="file"
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       Select file
//                     </label>
//                     {file && <p className="mt-4">{file.name}</p>}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className={`border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg ${
//                     file
//                       ? "text-white bg-green-500 border-transparent"
//                       : "text-gray-500"
//                   } poppins-regular`}
//                   type="button"
//                   onClick={handleClick}
//                 >
//                   Process File
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {show && !finalShow && (
//           <>
//             {/* 2. */}
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//                Upload Client data
//              </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10">
//                  <p className="poppins-regular text-xl">
//                    Your file is being processed...
//                  </p>
//                  <div className="flex flex-row justify-center text-center items-center border-dashed border-2 border-green-400 text-center mt-10 pt-[20px] pr-[30px] pb-[20px] pl-[30px] rounded-[12px] ">
//                    <span className="arrow">
//                      <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                    </span>
//                    <div className="ml-[35px] mr-[71px]">
//                      <p className="mt-1 mb-3 poppins-regular">
//                        Select a file or drag and drop here
//                      </p>
//                      <p className="poppins-regular text-gray-500">
//                        Only .xlsx extensions can be processed
//                      </p>
//                    </div>
//                    {/* Upload file */}
//                    <div className="App">
//                      <label className="poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 ">
//                        <input
//                          type="file"
//                          onChange={handleChange}
//                          className="hidden"
//                        />
//                        SELECT FILE
//                      </label>
//                      {file && <p className="mt-4">{file.name}</p>}
//                    </div>
//                    {/* Upload file */}
//                  </div>
//                  <div className="text-center poppins-regular">
//                    <p className="mt-[48px]">File added</p>
//                    <img src="images/file_upload.png" alt="file_upload"></img>
//                  </div>
//                </div>

//                <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                   <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                  <button
//                   className="pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg text-white bg-green-500 poppins-regular"
//                   type="button"
//                  >
//                   Process File
//                 </button>
//                </div>
//              </div>

//           </>
//         )}

//         {finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="max-h-[500px] h-[500px] flex justify-center bg-white mr-[20px] ml-[20px]">
//               <div className="flex flex-col justify-center items-center">
//                 <div className="flex flex-col justify-center items-center">
//                   <p className="poppins-regular text-4xl">Success!</p>
//                   <p className="poppins-regular text-lg text-gray-500 mt-[27px] mb-[40px]">
//                     Documents uploaded successfully! Check the <br></br> Download
//                     Results page to see the results.
//                   </p>
//                 </div>
//                 <div className="poppins-regular text-[24px]">
//                   <button
//                     type="button"
//                     className="border-[3px] border-gray-300 pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 hover:bg-green-500 hover:text-white"
//                     onClick={() => router.push("/download-results")}
//                   >
//                     Go To Download Results Page
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </DashboardLayout>
//     </div>
//   );
// };

// export default UploadClient;

// import DashboardLayout from "@/components/templete/dashboard";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const UploadClient = () => {
//   const router = useRouter(); // Initialize the useRouter hook
//   const [file, setFile] = useState();
//   const [show, setShow] = useState(false);
//   const [finalShow, setFinalShow] = useState(false);
//   const [progress, setProgress] = useState(0); // State to track progress

//   // Function to handle file selection
//   function handleChange(e) {
//     setFile(e.target.files[0]); // Store the file object
//   }

//   // Function to handle file processing click
//   const ProcessFilehandleClick = () => {
//     setShow(false);
//     if (file) {
//       setShow(true); // Show the next section if file is selected
//       simulateProgress(); // Start simulating the progress
//     } else {
//       alert("Please Select File");
//     }
//   };

//   // Function to simulate progress
//   const simulateProgress = () => {
//     let progressInterval = 0;

//     const interval = setInterval(() => {
//       progressInterval += 10;
//       setProgress(progressInterval);

//       if (progressInterval >= 100) {
//         clearInterval(interval);
//         setShow(false);
//         setFinalShow(true); // Show final success section after progress is complete
//       }
//     }, 500); // Update every 500ms
//   };

//   // Cancel button handler to reset the file state
//   const handleCancel = () => {
//     setFile(null); // Clear the file state
//     setShow(true); // Reset show state to hide sections
//     setFinalShow(false); // Reset final show state
//     setProgress(0); // Reset progress
//   };

//   return (
//     <div>
//       <DashboardLayout>
//         {!show && !finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10 bg-white">
//                 <p className="poppins-regular text-xl">
//                   Please Upload your Excel Sheet Here
//                 </p>
//                 <div className="flex flex-col justify-center items-center border-dashed border-2 border-gray-00 text-center mt-10 pt-10 pb-10 pl-20 pr-20">
//                   <span className="arrow">
//                     <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                   </span>
//                   <p className="mt-1 mb-3 poppins-regular">
//                     Select a file or drag and drop here
//                   </p>
//                   <p className="poppins-regular text-gray-500">
//                     Only .xlsx extensions can be processed
//                   </p>

//                   <div className="App mt-8">
//                     <label className="mt-8 poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 hover:bg-green-500 hover:text-white ">
//                       <input
//                         type="file"
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       Select file
//                     </label>
//                     {file && <p className="mt-4">{file.name}</p>}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className={`border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg ${
//                     file
//                       ? "text-white bg-green-500 border-transparent"
//                       : "text-gray-500"
//                   } poppins-regular`}
//                   type="button"
//                   onClick={ProcessFilehandleClick}
//                 >
//                   Process File
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {show && !finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10">
//                 <p className="poppins-regular text-xl">
//                   Your file is being processed...
//                 </p>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                   <div
//                     className="bg-green-500 h-2.5 rounded-full"
//                     style={{ width: `${progress}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="max-h-[500px] h-[500px] flex justify-center bg-white mr-[20px] ml-[20px]">
//               <div className="flex flex-col justify-center items-center">
//                 <div className="flex flex-col justify-center items-center">
//                   <p className="poppins-regular text-4xl">Success!</p>
//                   <p className="poppins-regular text-lg text-gray-500 mt-[27px] mb-[40px]">
//                     Documents uploaded successfully! Check the <br></br> Download
//                     Results page to see the results.
//                   </p>
//                 </div>
//                 <div className="poppins-regular text-[24px]">
//                   <button
//                     type="button"
//                     className="border-[3px] border-gray-300 pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 hover:bg-green-500 hover:text-white"
//                     onClick={() => router.push("/download-results")}
//                   >
//                     Go To Download Results Page
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </DashboardLayout>
//     </div>
//   );
// };

// export default UploadClient;

// success

// import DashboardLayout from "@/components/templete/dashboard";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const UploadClient = () => {
//   const router = useRouter(); // Initialize the useRouter hook
//   const [file, setFile] = useState();
//   const [show, setShow] = useState(false);
//   const [finalShow, setFinalShow] = useState(false);
//   const [progress, setProgress] = useState(0); // State to track progress

//   // Function to handle file selection
//   function handleChange(e) {
//     setFile(e.target.files[0]); // Store the file object
//   }

//   // Function to handle file processing click
//   const handleClick = () => {
//     setShow(false);
//     if (file) {
//       setShow(true); // Show the next section if file is selected
//     } else {
//       alert("Please Select File");
//     }
//   };

//   // Function to handle file processing click
//   const ProcessFilehandleClick = () => {
//     setShow(false);
//     if (file) {
//       setShow(true); // Show the next section if file is selected
//       simulateProgress(); // Start simulating the progress
//     } else {
//       alert("Please Select File");
//     }
//   };

//   // Function to simulate progress
//   const simulateProgress = () => {
//     let progressInterval = 0;

//     const interval = setInterval(() => {
//       progressInterval += 10;
//       setProgress(progressInterval);

//       if (progressInterval >= 100) {
//         clearInterval(interval);
//         setShow(false);
//         setFinalShow(true); // Show final success section after progress is complete
//       }
//     }, 500); // Update every 500ms
//   };

//   // Cancel button handler to reset the file state
//   const handleCancel = () => {
//     setFile(null); // Clear the file state
//     setShow(true); // Reset show state to hide sections
//     setFinalShow(false); // Reset final show state
//     setProgress(0); // Reset progress
//   };

//   return (
//     <div>
//       <DashboardLayout>
//         {!show && !finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10 bg-white">
//                 <p className="poppins-regular text-xl">
//                   Please Upload your Excel Sheet Here
//                 </p>
//                 <div className="flex flex-col justify-center items-center border-dashed border-2 border-gray-00 text-center mt-10 pt-10 pb-10 pl-20 pr-20">
//                   <span className="arrow">
//                     <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                   </span>
//                   <p className="mt-1 mb-3 poppins-regular">
//                     Select a file or drag and drop here
//                   </p>
//                   <p className="poppins-regular text-gray-500">
//                     Only .xlsx extensions can be processed
//                   </p>
//                   <div className="App mt-8">
//                     <label className="mt-8 poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 hover:bg-green-500 hover:text-white ">
//                       <input
//                         type="file"
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       Select file
//                     </label>
//                     {file && <p className="mt-4">{file.name}</p>}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className={`border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg ${
//                     file
//                       ? "text-white bg-green-500 border-transparent"
//                       : "text-gray-500"
//                   } poppins-regular`}
//                   type="button"
//                   onClick={handleClick}
//                 >
//                   Process File
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {show && !finalShow && (
//           <>
//             {/* 2. */}
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="bg-white ml-[20px] mr-[20px]">
//               <div className="flex flex-col justify-center items-center pt-10 pb-10">
//                 <p className="poppins-regular text-xl">
//                   Your file is being processed...
//                 </p>
//                 <div className="flex flex-row justify-center text-center items-center border-dashed border-2 border-green-400 text-center mt-10 pt-[20px] pr-[30px] pb-[20px] pl-[30px] rounded-[12px] ">
//                   <span className="arrow">
//                     <img src="/images/arrow_image.png" alt="arrow_image"></img>
//                   </span>
//                   <div className="ml-[35px] mr-[71px]">
//                     <p className="mt-1 mb-3 poppins-regular">
//                       Select a file or drag and drop here
//                     </p>
//                     <p className="poppins-regular text-gray-500">
//                       Only .xlsx extensions can be processed
//                     </p>
//                   </div>
//                   {/* Upload file */}
//                   <div className="App">
//                     <label className="poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 ">
//                       <input
//                         type="file"
//                         onChange={handleChange}
//                         className="hidden"
//                       />
//                       SELECT FILE
//                     </label>
//                     {file && <p className="mt-4">{file.name}</p>}
//                   </div>
//                   {/* Upload file */}
//                 </div>






// <div className="flex mt-[48px]">
  
// <div className="flex justify-center flex-col text-center">
//   <div className="poppins-regular text-[18px]">File added</div>
//   <div className="flex justify-between"><p className="poppins-regular">Excel.xlxl</p><p className="poppins-regular">5.7MB</p></div>
// <div className="w-[620px] bg-gray-200 rounded-full h-2.5 mt-4">
//                   <div
//                     className="bg-green-500 h-2.5 rounded-full"
//                     style={{ width: `${progress}%` }}
//                   ></div>
//                 </div>

// </div>

// <div className="flex items-end"><button className="bg-green-500" type="button">Stop</button></div>
// </div>

              
              
              
              
//               </div>

//               <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
//                 <button
//                   className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
//                   type="button"
//                   onClick={handleCancel} // Attach the cancel handler
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className={`border-2 border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-lg ${
//                     file
//                       ? "text-white bg-green-500 border-transparent"
//                       : "text-gray-500"
//                   } poppins-regular`}
//                   type="button"
//                   onClick={ProcessFilehandleClick}
//                 >
//                   Process File
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {finalShow && (
//           <>
//             <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
//               Upload Client data
//             </div>
//             <div className="max-h-[500px] h-[500px] flex justify-center bg-white mr-[20px] ml-[20px]">
//               <div className="flex flex-col justify-center items-center">
//                 <div className="flex flex-col justify-center items-center">
//                   <p className="poppins-regular text-4xl">Success!</p>
//                   <p className="poppins-regular text-lg text-gray-500 mt-[27px] mb-[40px]">
//                     Documents uploaded successfully! Check the <br></br>{" "}
//                     Download Results page to see the results.
//                   </p>
//                 </div>
//                 <div className="poppins-regular text-[24px]">
//                   <button
//                     type="button"
//                     className="border-[3px] border-gray-300 pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 hover:bg-green-500 hover:text-white"
//                     onClick={() => router.push("/download-results")}
//                   >
//                     Go To Download Results Page
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </DashboardLayout>
//     </div>
//   );
// };

// export default UploadClient;






import DashboardLayout from "@/components/templete/dashboard";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";

const UploadClient = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [finalShow, setFinalShow] = useState(false);
  const [progress, setProgress] = useState(0); // State to track progress
  const [isProcessing, setIsProcessing] = useState(false); // State to manage process state
  const progressIntervalRef = useRef(null); // Ref to store the interval

  // Function to handle file selection
  function handleChange(e) {
    setFile(e.target.files[0]); // Store the file object
  }

  // Function to handle file processing click
  const handleClick = () => {
    setShow(false);
    if (file) {
      setShow(true); // Show the next section if file is selected
    } else {
      alert("Please Select File");
    }
  };

  // Function to handle file processing click
  const ProcessFilehandleClick = () => {
    setShow(false);
    if (file) {
      setShow(true); // Show the next section if file is selected
      simulateProgress(); // Start simulating the progress
    } else {
      alert("Please Select File");
    }
  };

  // Function to simulate progress
  const simulateProgress = () => {
    setIsProcessing(true); // Mark the processing state as true
    let progressInterval = 0;

    progressIntervalRef.current = setInterval(() => {
      progressInterval += 10;
      setProgress(progressInterval);

      if (progressInterval >= 100) {
        clearInterval(progressIntervalRef.current);
        setIsProcessing(false); // Reset processing state
        setShow(false);
        setFinalShow(true); // Show final success section after progress is complete
      }
    }, 500); // Update every 500ms
  };

  // Function to stop the progress
  const handleStop = () => {
    clearInterval(progressIntervalRef.current); // Clear the interval
    setIsProcessing(false); // Reset processing state
  };

  // Cancel button handler to reset the file state
  const handleCancel = () => {
    clearInterval(progressIntervalRef.current); // Clear any running interval
    setFile(null); // Clear the file state
    setShow(true); // Reset show state to hide sections
    setFinalShow(false); // Reset final show state
    setProgress(0); // Reset progress
    setIsProcessing(false); // Reset processing state
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
                    {file && <p className="mt-4">{file.name}</p>}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
                <button
                  className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
                  type="button"
                  onClick={handleCancel} // Attach the cancel handler
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
          </>
        )}

        {show && !finalShow && (
          <>
            <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
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
                  {/* Upload file */}
                  <div className="App">
                    <label className="poppins-medium bg-white border-2 rounded-lg border-green-500 pt-[10px] pr-[15px] pb-[10px] pl-[15px] text-green-500 ">
                      <input
                        type="file"
                        onChange={handleChange}
                        className="hidden"
                      />
                      SELECT FILE
                    </label>
                    {file && <p className="mt-4">{file.name}</p>}
                  </div>
                  {/* Upload file */}
                </div>

                <div className="flex mt-[48px]">
                  <div className="flex justify-center flex-col text-center">
                    <div className="poppins-regular text-[18px]">File added</div>
                    <div className="flex justify-between">
                      <p className="poppins-regular">Excel.xlxl</p>
                      <p className="poppins-regular">5.7MB</p>
                    </div>
                    <div className="w-[620px] bg-gray-200 rounded-full h-2.5 mt-4">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-end">
                    {isProcessing && (
                      <button
                        className=" text-red p-2 rounded"
                        type="button"
                        onClick={handleStop}
                      >
                        <img src="./images/cross_Icon.png"></img>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mr-[104px] mt-10 mb-[20px]">
                <button
                  className="border-gray-500 pt-[10px] pr-[20px] pb-[10px] pl-[20px] mr-[10px] poppins-regular"
                  type="button"
                  onClick={handleCancel} // Attach the cancel handler
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
                  onClick={ProcessFilehandleClick}
                >
                  Process File
                </button>
              </div>
            </div>
          </>
        )}

        {finalShow && (
          <>
            <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
              Upload Client data
            </div>
            <div className="max-h-[500px] h-[500px] flex justify-center bg-white mr-[20px] ml-[20px]">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <p className="poppins-regular text-4xl">Success!</p>
                  <p className="poppins-regular text-lg text-gray-500 mt-[27px] mb-[40px]">
                    Documents uploaded successfully! Check the <br /> Download
                    Results page to see the results.
                  </p>
                </div>
                <div className="poppins-regular text-[24px]">
                  <button
                    type="button"
                    className="border-[3px] border-gray-300 pt-[20px] pr-[40px] pb-[20px] pl-[40px] rounded-[8px] text-green-500 hover:bg-green-500 hover:text-white"
                    onClick={() => router.push("/download-results")}
                  >
                    Go To Download Results Page
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </DashboardLayout>
    </div>
  );
};

export default UploadClient;

