import styled from "styled-components";
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

const GoalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
  position: relative;

  p {
    padding-top: 2rem;
  }
`;

const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 2rem 0;
`;

const ChartContainer = styled.div`
  width: 5rem;
  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
`;

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
            <h3>{goal.category}</h3>
            {goal.description}
            {goal.amount}
            {goal.deposit}
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
            <p>
              ${goal.deposit} of ${goal.amount}
            </p>
          </GoalContainer>
        );
      })}
    </ListContainer>
  );
};

export default GoalsList;
