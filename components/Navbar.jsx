import React from "react";
import { links, tools } from "../data/dummy";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 bg-backgroundColor text-white">
      <div className="links flex gap-4">
        {links.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p>{item.name}</p>
            <p>{item.icon}</p>
          </div>
        ))}
      </div>
      <div className="tools flex gap-4 items-center text-xl cursor-pointer">
        {tools.map((tool) => (
          <div key={tool.name}>
            <p>{tool.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
