import React from "react";
import { headers } from "../data/dummy";
import { GrTableAdd } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="top flex justify-evenly uppercase border  p-2 text-gray-500 text-x">
        <GrTableAdd style={{ cursor: "pointer" }} />
        {headers.map((header) => (
          <div className="" key={header.title}>
            <p>{header.title}</p>
          </div>
        ))}
      </div>
      <div className="bottom border border-b-0 h-full font-semibold text-gray-600 p-2 ">
        <p className="text-center">No Applications Found</p>
        <div className="select-con flex items-center justify-center mt-10">
          <select
            className="font-semibold border p-1 text-xs"
            style={{ backgroundColor: "#eee", borderRadius: "5px" }}
          >
            <option value="10">10 Records Per Page</option>
            <option value="20">20 Records Per Page</option>
            <option value="30">30 Records Per Page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Main;
