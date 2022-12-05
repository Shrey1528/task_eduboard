import React from "react";
import { applications, apptools } from "../data/dummy";
import { AiOutlineSortAscending } from "react-icons/ai";

const Toolbar = () => {
  return (
    <div className="toolbar flex justify-between p-3 border">
      <div className="applications flex items-center gap-3 cursor-pointer">
        {applications.map((app) => (
          <div className="flex items-center gap-2" key={app.title}>
            <p>{app.text}</p>
            <p>{app.icon}</p>
          </div>
        ))}
      </div>
      <div className="options flex gap-5 items-center cursor-pointer">
        <div className="apptools flex gap-5">
          {apptools.map((apptool) => (
            <div
              key={apptool.title}
              className="border-2 flex items-center pt-2 pb-2 pl-3 pr-3 rounded-borderRadius text-gray-500"
            >
              <p>{apptool.icon}</p>
            </div>
          ))}
        </div>
        <div className="a-z text-xl">
          <AiOutlineSortAscending />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
