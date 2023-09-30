import * as React from "react";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

function SummaryCard({ title, totalNumber, percentage }) {
  console.log(title, totalNumber, percentage);
  const summary = `${percentage}% of common crimes`;
  return (
    <Card className="max-w-xs">
      <Text>{title}</Text>
      <Metric>{totalNumber}</Metric>
      <Flex className="mt-4">
        <Text>{summary}</Text>
        <Text></Text>
      </Flex>
      <ProgressBar value={percentage} className="mt-2" />
    </Card>
  );
}

export default SummaryCard;
