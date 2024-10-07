import React from "react";
import logo from "../assets/img/logo.jpeg";

const Navbar2 = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex gap-1 items-center ">
            <img src={logo} className="w-[30px] h-[30px]" />
            <p className="text-[30px] font-semibold text-green-600 ">
              tutorialspoint
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">Category</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <p className="text-xl">Library</p>
          </div>
          <div>
            <p className="text-xl ">course</p>
          </div>
          <div>
            <p className="text-xl ">Certification</p>
          </div>
          <div>
            <button className="bg-green-700 text-[15px] px-3 py-1 text-center">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar2;
