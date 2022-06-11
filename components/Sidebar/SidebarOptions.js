import React from "react";

function SidebarOptions({ text, Icon,active }) {
  return (
    <div className={active ? `flex space-x-5 bg-blue-100 hover:bg-blue-200 font-semibold p-2 items-center text-blue-600 cursor-pointer m-2 rounded-full` : `flex space-x-5 hover:bg-gray-300 font-semibold p-2 items-center text-gray-700 cursor-pointer m-2 rounded-full` }>
      <div className="ml-2">{Icon}</div>
      <div className="flex flex-1 text-sm">{text}</div>
    </div>
  );
}

export default SidebarOptions;
