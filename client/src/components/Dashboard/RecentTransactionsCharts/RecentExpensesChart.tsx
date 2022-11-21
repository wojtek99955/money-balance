import styled from "styled-components";
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
import { useGetDailySumExpensesQuery } from "../../../api/expenseApiSlice";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RecentExpensesChart = () => {
  const { data: dailySum, isLoading } = useGetDailySumExpensesQuery(undefined);
  console.log(dailySum);

  const labels = dailySum?.totalDayExpense.map((dailySum: any) => {
    return dailySum._id.day;
  });
  const data = dailySum?.totalDayExpense.map((dailySum: any) => {
    return dailySum.totalAmount;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data,
        borderColor: "#E65015",
        backgroundColor: "#FFD1D1",
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

export default RecentExpensesChart;
