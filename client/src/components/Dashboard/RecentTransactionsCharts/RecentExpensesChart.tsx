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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetDailySumExpensesQuery } from "../../../api/expenseApiSlice";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const RecentExpensesChart = () => {
  const { data: dailySum, isLoading } = useGetDailySumExpensesQuery(undefined);

  const labels = dailySum?.totalDayExpense.map((dailySum: any) => {
    return dailySum._id;
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
        backgroundColor: "rgba(255, 209, 209, 0.6)",
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
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 4,
      },
    },
  };
  const loading = isLoading ? <LoaderContainer /> : null;
  return (
    <>
      {loading}
      <Line style={{ maxHeight: "13rem" }} options={options} data={chartData} />
    </>
  );
};

export default RecentExpensesChart;
