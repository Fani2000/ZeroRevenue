import { Card, List, Text } from "@tremor/react";
import React from "react";
import { useSelector } from "react-redux";

const ListItem = () => {
  const events = useSelector((store) => store.events);
  return (
    <List className="h-56 px-2 scroll flex-col">
      {events.map((item, i) => (
        <ListItem key={i}>
          <div className="flex bg-gray-200 w-full rounded px-2">
            <div className="flex-1 flex-col  justify-start ">
              <Text className="font-bold">{item.address}</Text>
              <Text>{item.type}</Text>
            </div>
            <div className="col self-end">2 minutes ago</div>
          </div>
          {/* <span>{item.type}</span>
            <span>{item.address}</span> */}
        </ListItem>
      ))}
    </List>
  );
};

export default ListItem;
