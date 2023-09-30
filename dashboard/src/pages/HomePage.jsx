import React from "react";
import Header from "../Components/Navbar/Header";
import SummaryCard from "../Components/SummaryCard/SummaryCard";
import AreaChart from "../Components/AreaChart/AreaChart";
import LineGraph from "../Components/LineGraph/LineGraph";
import BarChart from "../Components/BarChart/BarChart";
import TabComponent from "../Components/Tabs/TabComponent";
import Map from "../Components/Map/Map";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex-col flex-wrap items-start gap-8 p-5">
        <h3 className="text-xl mb-3">Welcome back, Fani!</h3>
        <div className="h-[500px]">
          <Map />
        </div>
        {/* <div className="flex flex-wrap gap-8 w-full">
          <SummaryCard
            title={"Total Crimes"}
            totalNumber={2900}
            percentage={56}
          />
          <SummaryCard
            title={"Total Crimes"}
            totalNumber={2900}
            percentage={56}
          />
          <SummaryCard
            title={"Total Crimes"}
            totalNumber={2900}
            percentage={56}
          />
        </div> */}
        <TabComponent />
      </div>
    </div>
  );
}

export default HomePage;
