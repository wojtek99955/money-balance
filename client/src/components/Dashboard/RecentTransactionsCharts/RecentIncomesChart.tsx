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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
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
const RecentIncomesChart = () => {
  const { data: dailySum, isLoading } = useGetDailySumIncomesQuery(undefined);
  console.log(dailySum);

  const labels = dailySum?.totalDayIncome.map((dailySum: any) => {
    return dailySum._id;
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
        borderColor: "#25c196",
        backgroundColor: "rgba(167, 238, 218, 0.6)",
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

export default RecentIncomesChart;
