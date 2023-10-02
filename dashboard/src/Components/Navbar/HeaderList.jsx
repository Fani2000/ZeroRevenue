import { useSelector } from "react-redux";
import { Card, List, ListItem, Text, Title } from "@tremor/react";

const cities = [
  {
    city: "Athens",
    rating: "2 open PR",
  },
  {
    city: "Luzern",
    rating: "1 open PR",
  },
  {
    city: "Zürich",
    rating: "0 open PR",
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
];

const HeaderList = () => {
  const events = useSelector((store) => store.events.events);
  return (
    <>
      <Card className="w-64 p-0">
      <Title className="bg-[#FA4C4C] rounded-sm px-2 text-white">Raised Events</Title>
        <List className="h-[200px] px-2 scroll flex-col">
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
      </Card>
    </>
  );
};

export default HeaderList;
