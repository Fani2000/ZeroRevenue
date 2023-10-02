import React from "react";
import Header from "../Components/Navbar/Header";
import SummaryCard from "../Components/SummaryCard/SummaryCard";
import AreaChart from "../Components/AreaChart/AreaChart";
import LineGraph from "../Components/LineGraph/LineGraph";
import BarChart from "../Components/BarChart/BarChart";
import TabComponent from "../Components/Tabs/TabComponent";
import Map from "../Components/Map/Map";
import { Card, Text, Title } from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent, setMap } from "../store/Events/eventSlice";

function HomePage() {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();
  // console.log(events);

  const handleSelectEvent = (event, i) => {
    dispatch(selectEvent(i));
    dispatch(setMap(event));
  };

  return (
    <div>
      <Header />
      <hr />
      <div className="flex-col flex-wrap items-start gap-8 p-5">
        <h3 className="text-xl mb-3">Welcome back, Fani!</h3>
        <div className="h-[400px] flex">
          <div className="flex-1">
            <Map />
          </div>
          <div className="w-[30%] flex-col gap-8 px-8">
            <Title>Recent Events</Title>
            <div className="flex-col gap-8 h-full">
              {events?.map((event, i) => {
                return (
                  <Card
                    onClick={() => handleSelectEvent(event, i)}
                    className="col my-2 hover:cursor-pointer"
                    decoration="top"
                    decorationColor={event.isSelected ? "red" : 'transparent'}
                    key={i}
                  >
                    <p
                      className="font-bold text-tremor-title"
                      style={{ textTransform: "capitalize" }}
                    >
                      {event.type}
                    </p>
                    <Text>{event.address}</Text>
                  </Card>
                );
              })}
            </div>
          </div>
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
        {/* <TabComponent /> */}
        <div className="mt-4 flex-col gap-2">
          <Title className="mb-4">Summary</Title>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
