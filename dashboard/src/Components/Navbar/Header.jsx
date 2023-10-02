import { Button, Icon, TextInput } from "@tremor/react";
import {
  SearchIcon,
  BellIcon,
  UserCircleIcon,
  CogIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import HeaderList from "./HeaderList";

function Header() {
  const [isNotification, setIsNotification] = useState(false);

  const handleShowNotifications = () => {
    setIsNotification((state) => (state = !state));
  };

  return (
    <div className="h-[40px] p-8 flex items-center justify-between">
      <div className="flex-1">Zero Revenue</div>
      <div className="col flex gap-2 items-center">
        <div className="flex items-center">
          <Icon color="gray" icon={SearchIcon} />
          <TextInput size={40} placeholder="Search" />
        </div>
        <div
          onClick={handleShowNotifications}
          className="hover:bg-[#ffd9d9] w-10 h-10 rounded-tremor-full flex justify-center items-center hover:cursor-pointer"
        >
          <Icon icon={BellIcon} />
          {/* <div
            style={{
              zIndex: 9999,
              top: "60px",
              right: "130px",
              height: '150px',
              display: isNotification ? "block" : "none",
            }}
            className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow "
          >
          </div> */}
        </div>
        <div className="hover:bg-[#ffd9d9] w-10 h-10 rounded-tremor-full flex justify-center items-center hover:cursor-pointer">
          <Icon icon={CogIcon} />
          {/* <div
            style={{ zIndex: 9999, top: "60px", right: "100px" }}
            className="hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow "
          >
            <HeaderList />
          </div> */}
        </div>
        <div className="hover:bg-[#ffd9d9] w-10 h-10 rounded-tremor-full flex justify-center items-center hover:cursor-pointer">
          <Icon icon={UserCircleIcon} />
          {/* <div
            style={{ zIndex: 9999, top: "60px", right: "50px" }}
            className="hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow "
          >
            <HeaderList />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
