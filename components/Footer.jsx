import React from "react";
import { footerhelp, users } from "../data/dummy";

const Footer = () => {
  return (
    <div className="border flex items-center absolute bottom-0  w-full">
      <div className="users flex items-center justify-between ">
        {users.map((user) => (
          <div
            className="flex flex-col items-center cursor-pointer"
            key={user.title}
          >
            <p className="text-xs" style={{ color: "gray" }}>
              {user.icon}
            </p>
            <p className="text-xs" style={{ fontSize: "10px", color: "gray" }}>
              {user.title}
            </p>
          </div>
        ))}
      </div>
      <div className="chat">
        <input
          type="text"
          placeholder="Here is your Smart Chat (Ctrl+Space)"
          className="border h-8 ml-2 w-full p-1 text-xs "
        />
      </div>
      <div className="help ml-4 text-gray-500">
        <div className="footer-help flex items-center gap-2 ">
          {footerhelp.map((item) => (
            <div
              className="flex items-center gap-2 border-r h-8 text-xl cursor-pointer"
              key={item.id}
            >
              <p>{item.icon}</p>
              <p className="text-xs mr-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
