import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/templete/dashboard";
import { Button } from "@/components/atoms/button";

const CustomerRules = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editItemId, setEditItemId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for error handling
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    fetch("https://663e20ebe1913c476796a1ab.mockapi.io/api/e-commerce/document")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
        console.log("res", res);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load data. Please check your connection or try again later."); // Set error message
        setLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    setEditItemId(id);
    console.log("Edit item with ID:", id);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    console.log("Deleted item with ID:", id);
  };

  return (
    <DashboardLayout>
      <div className="flex text-[24px] pl-[31px] poppins-bold h-[95px] w-full items-center">
        All Customers
      </div>
      <div className="h-auto flex flex-col rounded-lg border-[1.3px] border-[#B9B9B9] mx-[30px] bg-white">
        <div className="flex flex-row justify-end h-[40px] mt-[12px] mr-[8px]">
          <select className="w-[124px] rounded-[10px] border-[2px] border-[#4D4D4D] poppins-semibold text-[15px]">
            <option value="">Rebate %</option>
            <option value="robot1">1%</option>
            <option value="robot2">1.5%</option>
          </select>
          <select className="w-[149px] rounded-[10px] mx-[21px] border-[2px] border-[#4D4D4D] poppins-semibold text-[15px]">
            <option value="">Rebate Type</option>
            <option value="robot1">Buying Group</option>
            <option value="robot2">Loyalty</option>
            <option value="robot1">Growth</option>
            <option value="robot2">Advertising</option>
          </select>
          <select className="w-[149px] rounded-[10px] mr-[21px] border-[2px] border-[#4D4D4D] poppins-semibold text-[15px]">
            <option value="">Buying Group</option>
            <option value="robot1">BuyingGroup 1</option>
            <option value="robot1">BuyingGroup 2</option>
            <option value="robot1">BuyingGroup 3</option>
            <option value="robot1">BuyingGroup 4</option>
            <option value="robot1">BuyingGroup 5</option>
          </select>
          <div>
            <Button />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center h-[400px] items-center"><img src="/images/Animation_reloader.gif"></img></div>
        ) : error ? (
          <div className="text-red-500 flex h-[400px] justify-center items-center poppins-semibold">{error}</div>
        ) : (
          <div className="overflow-auto mt-[12px] ml-[12px] mr-[12px] bg-white">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Customer Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Rebate Type
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Buying Group
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Rebate %
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">
                      {item.customername}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.rebatetype}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.buyinggroup}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.rebatepercentage}%
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-blue-500 mr-4"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500"
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-between mt-[20px] mb-[20px] mx-[8px]">
          <div className="poppins-medium text-[16px] text-[#B5B7C0]">
            Showing Data {indexOfFirstItem + 1} to {indexOfLastItem} of{" "}
            {data.length} entries
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

export default CustomerRules;
