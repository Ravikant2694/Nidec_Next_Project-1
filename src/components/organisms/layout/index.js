import React from "react";

export const Layout = () => {
    return(
        <nav className=" fixed top-0 left-0 right-0 bg-white z-50 flex justify-between items-center pl-[72px] pr-[72px] pt-[20px] pb-[10px]">
        <div>
          <img src="/images/nidec_heading.png"></img>
        </div>
        <div>
          <ul className="flex flex-row poppins-medium text-base ">
            <li className="pl-4 pr-4 text-green-500">
              <a href="#">Upload Client Data</a>
            </li>
            <li className="pl-4 pr-4">
              <a href="#">Download Results</a>
            </li>
            <li className="pl-4 pr-4">
              <a href="#">Customer Rules</a>
            </li>
            <li className="pl-4 pr-4 text-red-500">
              <i class="bi bi-box-arrow-right"></i>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}