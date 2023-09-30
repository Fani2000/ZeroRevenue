import { Button, Icon, TextInput } from "@tremor/react";
import { SearchIcon, BellIcon, UserCircleIcon, CogIcon } from "@heroicons/react/outline";
import React from "react";

function Header() {
  return (
    <div className="h-[40px] p-8 flex items-center justify-between">
      <div className="flex-1">Zero Revenue</div>
      <div className="col flex gap-2 items-center">
        <div className="flex items-center">
          <Icon color="gray" icon={SearchIcon} />
          <TextInput size={40} placeholder="Search" />
        </div>
        <Icon icon={BellIcon} />
        <Icon icon={CogIcon} />
        <Icon icon={UserCircleIcon} />
      </div>
    </div>
  );
}

export default Header;
