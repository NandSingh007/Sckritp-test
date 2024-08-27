import React, { useState } from "react";
import { useQuery } from "react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const fetchData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const Dashboard = () => {
  const {
    data: lineChartData,
    error: lineChartError,
    isLoading: lineChartLoading
  } = useQuery("lineChart", () =>
    fetchData("https://mock-react-dashboard-api.alphaos.workers.dev/chart/line")
  );

  const {
    data: pieChartData,
    error: pieChartError,
    isLoading: pieChartLoading
  } = useQuery("pieChart", () =>
    fetchData("https://mock-react-dashboard-api.alphaos.workers.dev/chart/pie")
  );

  const {
    data: barChartData,
    error: barChartError,
    isLoading: barChartLoading
  } = useQuery("barChart", () =>
    fetchData(
      "https://mock-react-dashboard-api.alphaos.workers.dev/chart/table"
    )
  );

  if (lineChartLoading || pieChartLoading || barChartLoading)
    return <p>Loading...</p>;
  if (lineChartError || pieChartError || barChartError)
    return <p>Error loading data.</p>;

  const lineChart1 = {
    chart: {
      type: "line",
      backgroundColor: "#fff"
    },
    title: {
      text: "Line Chart"
    },
    xAxis: {
      categories: lineChartData.series,
      title: {
        text: "Date"
      },
      labels: { style: { color: "#000" } }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: { style: { color: "#000" } }
    },
    series: [{ name: "Posts", data: lineChartData.datasets[0].data }]
  };

  const lineChart2 = {
    chart: {
      type: "line",
      backgroundColor: "#fff"
    },
    title: {
      text: "Line Chart"
    },
    xAxis: {
      categories: pieChartData.labels,
      title: {
        text: "label"
      },
      labels: { style: { color: "#000" } }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: { style: { color: "#000" } }
    },
    series: [
      {
        name: "Status",
        data: pieChartData.labels.map((label, index) => ({
          name: label,
          y: pieChartData.data[index]
        }))
      }
    ]
  };

  const lineChart3 = {
    chart: {
      type: "line",
      backgroundColor: "#fff"
    },
    title: {
      text: "Line Chart"
    },
    xAxis: {
      categories: barChartData.map((row) => row.title),
      title: {
        text: "Item"
      },
      labels: { style: { color: "#000" } }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: { style: { color: "#000" } }
    },
    series: [
      {
        name: "Posts",
        data: barChartData.map((row) => row.votes_count_number || 0)
      }
    ]
  };

  const pieChart1 = {
    chart: {
      type: "pie",
      backgroundColor: "#fff"
    },
    title: {
      text: "Pie Chart"
    },
    series: [
      {
        name: "Posts",
        data: lineChartData.series.map((date, index) => ({
          name: date,
          y: lineChartData.datasets[0].data[index]
        }))
      }
    ],
    plotOptions: {
      pie: {
        dataLabels: {
          style: { color: "#000" }
        }
      }
    }
  };

  const pieChart2 = {
    chart: { type: "pie", backgroundColor: "#fff" },
    title: {
      text: "Pie Chart"
    },
    xAxis: {
      categories: pieChartData.labels,
      title: {
        text: "label"
      },
      labels: { style: { color: "#000" } }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: { style: { color: "#000" } }
    },
    series: [
      {
        name: "Status",
        data: pieChartData.labels.map((label, index) => ({
          name: label,
          y: pieChartData.data[index]
        }))
      }
    ],
    plotOptions: {
      pie: {
        dataLabels: { style: { color: "#000" } }
      }
    }
  };

  const pieChart3 = {
    chart: { type: "pie", backgroundColor: "#fff" },
    title: {
      text: "Pie Chart"
    },
    xAxis: {
      categories: barChartData.map((row) => row.title),
      title: {
        text: "Item"
      }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: { style: { color: "#000" } }
    },
    series: [
      {
        name: "Posts",
        data: barChartData.map((row) => row.votes_count_number || 0)
      }
    ],
    plotOptions: {
      pie: {
        dataLabels: { style: { color: "#000" } }
      }
    }
  };

  const barChart1 = {
    chart: {
      type: "bar",
      backgroundColor: "#fff"
    },
    title: {
      text: "Bar Chart"
    },
    xAxis: {
      categories: lineChartData.series,
      title: {
        text: "Date"
      },
      labels: {
        style: { color: "#000" }
      }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: {
        style: { color: "#000" }
      }
    },
    series: [
      {
        name: lineChartData.datasets[0].name,
        data: lineChartData.datasets[0].data
      }
    ]
  };

  const barChart2 = {
    chart: { type: "bar", backgroundColor: "#fff" },
    title: {
      text: "Bar Chart"
    },
    xAxis: {
      categories: pieChartData.labels,
      title: {
        text: "label"
      },
      labels: { style: { color: "#000" } }
    },
    yAxis: {
      title: {
        text: "Posts"
      },
      labels: { style: { color: "#000" } }
    },
    series: [
      {
        name: "Status",
        data: pieChartData.labels.map((label, index) => ({
          name: label,
          y: pieChartData.data[index]
        }))
      }
    ]
  };

  const barChart3 = {
    chart: { type: "bar", backgroundColor: "#fff" },
    title: {
      text: "Bar Chart"
    },
    xAxis: {
      categories: barChartData.map((row) => row.title),
      title: {
        text: "Item"
      },
      labels: { style: { color: "#000" } }
    },
    yAxis: {
      title: {
        text: "Values"
      },
      labels: { style: { color: "#000" } }
    },
    series: [
      {
        name: "Values",
        data: barChartData.map((row) => row.votes_count_number || 0)
      }
    ]
  };

  return (
    <div
      className="bg-white text-black"
      style={{ backgroundColor: "yellowgreen" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "white",
          fontWeight: "bold"
        }}
      >
        Graph Representaion By Using Api Data
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-12">
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Line Chart from API 1</h2>
          <HighchartsReact highcharts={Highcharts} options={lineChart1} />
        </div>
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Line Chart from API 2</h2>
          <HighchartsReact highcharts={Highcharts} options={lineChart2} />
        </div>

        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Line Chart from API 3</h2>
          <HighchartsReact highcharts={Highcharts} options={lineChart3} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Pie Chart from API 1</h2>
          <HighchartsReact highcharts={Highcharts} options={pieChart1} />
        </div>
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Pie Chart from API 2</h2>
          <HighchartsReact highcharts={Highcharts} options={pieChart2} />
        </div>

        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Pie Chart from API 3</h2>
          <HighchartsReact highcharts={Highcharts} options={pieChart3} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-12">
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Bar Chart from API 1</h2>
          <HighchartsReact highcharts={Highcharts} options={barChart1} />
        </div>
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Bar Chart from API 2</h2>
          <HighchartsReact highcharts={Highcharts} options={barChart2} />
        </div>
        <div className="p-4 shadow rounded bg-white">
          <h2 className="text-xl font-bold">Bar Chart from API 3</h2>
          <HighchartsReact highcharts={Highcharts} options={barChart3} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
