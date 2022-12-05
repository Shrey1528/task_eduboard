import React from "react";
import { BiSearch } from "react-icons/bi";
import { filters } from "../data/dummy";

const Sidebar = () => {
  return (
    <div className="filter-con p-3">
      <div className="heading flex items-center justify-between text-gray-400 font-thin">
        <p>Filter Appllications</p>
        <BiSearch style={{ cursor: "pointer" }} />
      </div>
      {filters.map((filter) => (
        <div className="flex gap-2 p-1" key={filter.id}>
          <input type="checkbox" />
          <p>{filter.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
