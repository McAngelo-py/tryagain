import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
  const populationOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: { ticks: { font: { weight: "bold" } } },
      y: { ticks: { font: { weight: "bold" } } },
    },
  };

  const growthOptions = { ...populationOptions };

  const userDistributionOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    },
  };

  // Population Line Chart
  const populationData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Population Growth",
        data: [43, 44, 46, 46, 48, 50, 51, 53, 54, 56, 57, 62],
        borderColor: "#7D91E0",
        backgroundColor: "rgba(125, 145, 224, 0.3)",
        fill: true,
        hoverOffset: 0,
      },
    ],
  };

  // Growth Bar Chart
  const growthData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Quarterly Growth",
        data: [10, 12, 8, 15],
        backgroundColor: "#F8B195",
        borderColor: "#F67280",
        borderWidth: 1,
        hoverOffset: 0,
      },
    ],
  };

  // User Distribution Pie Chart
  const userDistributionData = {
    labels: ["Female", "Male", "LGBTQ+"],
    datasets: [
      {
        data: [150, 80, 10],
        backgroundColor: ["#FFB7C5", "#8AC6D1", "#F6D365"],
        hoverOffset: 0,
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Dashboard Title */}
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="charts-container">
        {/* Left Column: Stacked Charts */}
        <div className="left-charts">
          <div className="chart-container">
            <h3 className="chart-title">Population Growth</h3>
            <Line data={populationData} options={populationOptions} />
          </div>

          <div className="chart-container">
            <h3 className="chart-title">Quarterly Growth</h3>
            <Bar data={growthData} options={growthOptions} />
          </div>
        </div>

        {/* Right Column: Pie Chart */}
        <div className="right-chart">
          <div className="chart-container">
            <h3 className="chart-title">Population by Gender</h3>
            <Pie data={userDistributionData} options={userDistributionOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
