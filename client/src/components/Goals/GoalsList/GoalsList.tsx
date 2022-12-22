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
  AcheivedGoal,
  AcheivedIcon,
  AddDepositIcon,
  DaysLeft,
} from "./GoalsListStyle";
import EditGoal from "../EditGoal/EditGoal";
import { useState } from "react";
import AddDepositModal from "../AddDepositModal/AddDepositModal";
import { AnimatePresence } from "framer-motion";
import { Goal } from "../../../Interfaces/Goal";

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
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
  };

  const [openAddDepositModal, setOpenAddDepositModal] = useState(false);
  const [currentId, setCurrentId] = useState(" ");
  const handleOpenAddDepositModal = () => {
    setOpenAddDepositModal(true);
  };

  return (
    <ListContainer>
      {goals.map((goal: any) => {
        return (
          <GoalContainer key={goal.goal._id}>
            <Category>{goal.goal.category}</Category>
            <Description>{goal.goal.description}</Description>
            <Amount>
              ${goal.goal.deposit} of ${goal.goal.amount}
              <AddDepositIcon
                onClick={() => {
                  handleOpenAddDepositModal();
                  setCurrentId(goal.goal._id);
                }}
              />
            </Amount>
            <DaysLeft>{goal.daysLeft} days left</DaysLeft>
            <EditGoal id={goal.goal._id} />
            <ChartContainer>
              {goal.deposit >= goal.amount ? (
                <AcheivedGoal>
                  <AcheivedIcon />
                </AcheivedGoal>
              ) : (
                <Doughnut
                  data={{
                    labels: ["Left", "Deposit"],
                    datasets: [
                      {
                        data: [
                          goal.goal.amount - goal.goal.deposit,
                          goal.goal.deposit,
                        ],
                        backgroundColor: ["#DEE1E9", "#009F5F"],
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </ChartContainer>
            <AnimatePresence>
              {openAddDepositModal ? (
                <AddDepositModal
                  currentId={currentId}
                  setOpenAddDepositModal={setOpenAddDepositModal}
                />
              ) : null}
            </AnimatePresence>
          </GoalContainer>
        );
      })}
    </ListContainer>
  );
};

export default GoalsList;
