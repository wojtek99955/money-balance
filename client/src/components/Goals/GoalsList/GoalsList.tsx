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

const Category = styled.h3`
  text-transform: capitalize;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;

const Amount = styled.p`
  padding-top: 2rem;
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
            <Category>{goal.category}</Category>
            <Description>{goal.description}</Description>
            <Amount>
              ${goal.deposit} of ${goal.amount}
            </Amount>
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
