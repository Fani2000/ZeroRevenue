import { UserGroupIcon, UserIcon } from "@heroicons/react/outline";
import {
  Flex,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import React from "react";
import AreaChartComponent from "../AreaChart/AreaChart";
import LineChartComponent from "../LineGraph/LineGraph";
import BarChartComponent from "../BarChart/BarChart";
import HeaderList from "../Navbar/HeaderList";
import ListItem from "./ListItem";

function TabComponent() {
  return (
    <TabGroup>
      <TabList className="mt-8">
        <Tab>All</Tab>
        <Tab icon={UserGroupIcon}>Medical</Tab>
        <Tab icon={UserIcon}>Fire</Tab>
        <Tab icon={UserIcon}>Crime</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="mt-10 h-56">
            {/* <ListItem /> */}
          </div>
          {/* <AreaChartComponent />
            <LineChartComponent /> */}
        </TabPanel>
        <TabPanel>
          <div className="mt-10 h-56">Welcome 2</div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10 h-56">Welcome 2</div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10 h-56">Welcome 2</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default TabComponent;
