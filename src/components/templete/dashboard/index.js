import { Sidebar } from "@/components/organisms/layout/index1";
import { Profile } from "@/components/organisms/index2";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Profile />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;



