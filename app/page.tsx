"use client";

import { LineChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Feb 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Mar 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Apr 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "May 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Jun 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Jul 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Aug 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Sep 22",
    Noyon: 6.5,
    Apurbo: 5.5,
    Nurul: 7.5,
    Nadira: 8.5,
  },
  {
    date: "Oct 22",
    Noyon: 6.5,
    Apurbo: 7.5,
    Nurul: 7.5,
    Nadira: 7.5,
  },
  {
    date: "Nov 22",
    Noyon: 6.5,
    Apurbo: 6.5,
    Nurul: 9,
    Nadira: 5.5,
  },
];

const dataFormatter = (number: number) => `Band ${number}`;

export default function LineChartHero() {
  return (
    <LineChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={["Noyon", "Apurbo", "Nurul", "Nadira"]}
      colors={["indigo", "rose", "lime", "amber"]}
      valueFormatter={dataFormatter}
      curveType="linear"
      maxValue={9}
      minValue={4}
      yAxisWidth={60}
      intervalType="preserveStartEnd"
      onValueChange={(v) => console.log(v)}
    />
  );
}
