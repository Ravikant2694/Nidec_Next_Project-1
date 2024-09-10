import DashboardLayout from "@/components/templete/dashboard";
import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/button";

const DownloadResults = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [currentPage, setCurrentPage] = useState(1); // State to hold current page number
  const [selectedFiles, setSelectedFiles] = useState([]); // State to hold selected files
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const itemsPerPage = 7; // Number of items per page

  // Fetch data from the API
  const fetchData = () => {
    setLoading(true); // Set loading state to true
    fetch("https://663e20ebe1913c476796a1ab.mockapi.io/api/e-commerce/image")
      .then((result) => {
        result.json().then((res) => {
          setData(res);
          setFilteredData(res); // Initialize filteredData with all data
          setLoading(false); // Set loading state to false after data is fetched
        });
      })
      .catch(() => setLoading(false)); // In case of error, set loading state to false
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update filtered data whenever the search query changes
  useEffect(() => {
    const results = data.filter((item) =>
      item.filename.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(results);
  }, [searchQuery, data]);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle selection of a file
  const handleFileSelection = (event, item) => {
    if (event.target.checked) {
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, item]); // Add item to selected files
    } else {
      setSelectedFiles((prevSelectedFiles) =>
        prevSelectedFiles.filter((selectedItem) => selectedItem.id !== item.id)
      ); // Remove item from selected files
    }
  };

  // Handle download button click
  const handleDownloadClick = () => {
    if (selectedFiles.length === 0) {
      alert("Please select a file to download."); // Alert if no files are selected
    } else {
      alert("Download File...");
      console.log("Selected files for download:", selectedFiles); // Log selected files to the console
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle "Clear All" button click
  const handleClearAll = () => {
    setSelectedFiles([]); // Clear all selected files
    setSearchQuery(""); // Clear the search input
    setFilteredData(data); // Reset filtered data to all data
  };
  return (
    <DashboardLayout>
      <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
        Download Results
      </div>

      {/* Main content */}
      <div className="h-auto flex flex-col rounded-lg border-[1.3px] border-[#B9B9B9] mx-[30px] bg-white">
        <div className="flex flex-row h-[52px] justify-between mt-[12px] ml-[8px] mr-[8px]">
          {/* Download button */}
          <div className="w-[145px] text-white bg-green-500 hover:bg-[#0AA546] rounded-[16px] flex justify-center items-center poppins-regular text-[16px]">
            <button type="button" onClick={handleDownloadClick}>
              Download
            </button>
          </div>
          {/* Search Box */}
          <div className="flex justify-between">
            <div className="flex justify-between flex-row h-[40px] w-[260px] border-[1px] border-[#0AA546] rounded-[8px] poppins-regular text-[14px] pt-[10px] pl-[14px] pb-[9px] pr-[15px]">
              <input
                className="placeholder-green-500"
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={handleSearchChange} // Add onChange handler for search
              />
              <button className="text-[#0AA546] h-[18px] w-[18px] text-[18px]">
                <i className="bi bi-search"></i>
              </button>
            </div>
            {/* Filter Button */}
            <div className="flex flex-row justify-center items-center h-[37px] w-[97px] rounded-[8px] pl-[1px] border-[2px] text-[#EAEEF4] ml-[20px] mr-[24px]">
              <button
                className="poppins-medium text-[14px] text-[#092C4C]"
                type="button"
              >
                Filter
              </button>
              <div className="flex ml-[1px]">
                <p className="border-1 border-green-500 text-[#7E92A2] text-[20px]">
                  <i className="bi bi-funnel"></i>
                </p>
                <p className="ml-[-16px] text-[#7E92A2] text-[20px]">
                  <i className="bi bi-plus"></i>
                </p>
              </div>
            </div>
            {/* Clear All Button */}
            <div>
              <Button handleClearAllClick={handleClearAll}/>
            </div>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center my-4">
            <img src="/images/Animation_reloader.gif"></img>
          </div>
        ) : (
          <>
            {/* Display current items in a table */}
            <div className="p-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="poppins-medium">
                  <tr>
                    <th className="px-6 py-3 text-left text-[17px] font-medium uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-[17px] font-medium uppercase">
                      File Name
                    </th>
                    <th className="px-6 py-3 text-left text-[17px] font-medium uppercase">
                      File Size
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 poppins-regular">
                  {currentItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 justify-start flex text-[16px]">
                        <p className="mr-4">
                          <input
                            type="checkbox"
                            onChange={(e) => handleFileSelection(e, item)}
                          />
                        </p>
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[16px]">
                        {item.filename}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[16px]">
                        {item.filesize}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-between mt-[20px] mb-[20px] mx-[8px]">
          <div className="poppins-medium text-[16px] text-[#B5B7C0]">
            Showing data {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredData.length)} of{" "}
            {filteredData.length} entries
          </div> 
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-green-500 text-white"
                    : "bg-[#EEEEEE]"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DownloadResults;




















