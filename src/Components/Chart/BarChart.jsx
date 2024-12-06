import React from "react";
import Chart from "react-apexcharts";
import classes from "./Chart.module.css";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: ["rgba(79, 70, 229, 1)", "rgba(16, 185, 129, 1)"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "21 Jan",
        "22 Jan",
        "23 Jan",
        "24 Jan",
        "25 Jan",
        "26 Jan",
        "27 Jan",
      ],
      labels: {
        style: {
          colors: "rgba(107, 114, 128, 1)",
        },
      },
    },
    yaxis: {
      title: {
        text: " ",
      },
      labels: {
        style: {
          colors: "rgba(107, 114, 128, 1)",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    legend: {
      show: false, // Hiding the legend (series text)
    },
  };

  const series = [
    {
      name: "Leads",
      data: [30, 40, 50, 70, 80, 90, 100],
    },
    {
      name: "Proposals",
      data: [20, 30, 40, 60, 70, 80, 90],
    },
  ];

  return (
    <div className={classes.bar_chart}>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
