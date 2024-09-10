import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation"; // Import the usePathname hook

// Define constants for routes and button data
const ROUTES = [
  {
    id: "1",
    name: "Upload Client Data",
    path: "/upload-client-data",
  },
  {
    id: "2",
    name: "Download Results",
    path: "/download-results",
  },
  {
    id: "3",
    name: "Customer Rules",
    path: "/customer-rules",
  },
];

// Parent Component
const ButtonComponent = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Function to handle button click
  const handleButtonClick = (route) => {
    console.log("Button clicked:", route);
    // Navigate to the specified route path
    router.push(route.path);
  };

  return (
    <div>
      {ROUTES.map((route) => (
        <div
          key={route.id}
          className={`h-[61px] w-[239px] poppins-semibold flex items-center ${
            pathname === route.path ? "text-green-500 border-green-500" : "text-gray-400"
          } hover:text-green-500 transition-colors duration-300 hover:border-l-4 border-l-4 border-black hover:border-green-500`}
        >
          <span className="pl-[20px] pr-[20px]">
            <i className="bi bi-upload"></i>
          </span>
          <button onClick={() => handleButtonClick(route)}>{route.name}</button>
        </div>
      ))}
    </div>
  );
};

export default ButtonComponent;



