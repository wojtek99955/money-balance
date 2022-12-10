import { Doughnut } from "react-chartjs-2";
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
  ArcElement,
} from "chart.js";
import {
  GoalContainer,
  ListContainer,
  ChartContainer,
  Category,
  Amount,
  Description,
} from "./GoalsListStyle";
import EditGoal from "../EditGoal/EditGoal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

interface Props {
  goals: any;
}

const GoalsList = ({ goals }: Props) => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      elements: {
        arc: {
          borderWidth: 0.5,
        },
      },
    },
  };
  return (
    <ListContainer>
      {goals.map((goal: any) => {
        return (
          <GoalContainer>
            <Category>{goal.category}</Category>
            <Description>{goal.description}</Description>
            <Amount>
              ${goal.deposit} of ${goal.amount}
            </Amount>
            <EditGoal id={goal._id} />
            <ChartContainer>
              <Doughnut
                data={{
                  labels: ["Left", "Deposit"],
                  datasets: [
                    {
                      data: [goal.amount - goal.deposit, goal.deposit],
                      backgroundColor: ["#DEE1E9", "#009F5F"],
                    },
                  ],
                }}
                options={chartOptions}
              />
            </ChartContainer>
          </GoalContainer>
        );
      })}
    </ListContainer>
  );
};

export default GoalsList;
