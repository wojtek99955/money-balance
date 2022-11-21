import styled from "styled-components";
import { useGetDailySumIncomesQuery } from "../../../api/incomeApiSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const RecentIncomesChart = () => {
  const { data: dailySum, isLoading } = useGetDailySumIncomesQuery(undefined);
  console.log(dailySum);

  const labels = dailySum?.totalDayIncome.map((dailySum: any) => {
    return dailySum._id.day;
  });
  const data = dailySum?.totalDayIncome.map((dailySum: any) => {
    return dailySum.totalAmount;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Incomes",
        data,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        fill: {
          target: "origin",
        },
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 4,
      },
    },
  };
  return (
    <>
      <Line style={{ maxHeight: "13rem" }} options={options} data={chartData} />
    </>
  );
};

export default RecentIncomesChart;
