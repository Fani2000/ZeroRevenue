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
          <div className="flex items-center gap-3 flex-wrap">
            <BarChartComponent />
            {/* <AreaChartComponent />
            <LineChartComponent /> */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10">Welcome 2</div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10">Welcome 3</div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10">Welcome 4</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default TabComponent;
