import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Incidents",
    "Number of Fire": 1445,
    "Number of Medical": 743,
    "Number of Crimes": 743,
  },
  {
    name: "Incidents",
    "Number of Fire": 1445,
    "Number of Medical": 743,
    "Number of Crimes": 743,
  },
  {
    name: "Incidents",
    "Number of Fire": 1445,
    "Number of Medical": 743,
    "Number of Crimes": 743,
  },
  {
    name: "Incidents",
    "Number of Fire": 1445,
    "Number of Medical": 743,
    "Number of Crimes": 743,
  },
  {
    name: "Incidents",
    "Number of Fire": 1445,
    "Number of Medical": 743,
    "Number of Crimes": 743,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const BarChartComponent = () => (
  <Card className="w-full">
    <Title>Number of report incidents by the community since (2021)</Title>
    <Subtitle>
      This information is stored and used later for analysis, this helps keep
      the community and everyone safe.
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Number of Medical", "Number of Fire", "Number of Crimes"]}
      colors={["red", "blue", "orange"]}
      yAxisWidth={48}
    />
  </Card>
);

export default BarChartComponent;
