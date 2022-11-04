import styled from "styled-components";
import { BiWallet } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { BiMedal } from "react-icons/bi";

const Container = styled.div`
  margin: 2rem 1rem;
  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2rem;
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.2rem;
    width: 20rem;
    margin: auto;
    padding-top: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4rem 0;
`;
const WalletIcon = styled(BiWallet)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.main.default};
`;
const ChartIcon = styled(BiBarChartSquare)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.main.default};
`;
const MedalIcon = styled(BiMedal)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1.8rem;
    padding: 0.5rem 0;
  }
  p {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
    font-size: 1rem;
  }
`;
const descriptions = [
  {
    name: "Track expenses",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur est esse sunt culpa quidem mollitia dignissimos quam error ex at consequuntur magnam vel veritatis dolore ipsa, fuga minima laborum.",
    icon: <WalletIcon />,
  },
  {
    name: "Regular summary",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur est esse sunt culpa quidem mollitia dignissimos quam error ex at consequuntur magnam vel veritatis dolore ipsa, fuga minima laborum.",
    icon: <ChartIcon />,
  },
  {
    name: "Set goals",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur est esse sunt culpa quidem mollitia dignissimos quam error ex at consequuntur magnam vel veritatis dolore ipsa, fuga minima laborum.",
    icon: <MedalIcon />,
  },
];

const About = () => {
  return (
    <Container>
      <h2>About</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        omnis assumenda officia consequuntur illo minus?
      </p>
      <GridContainer>
        {descriptions.map((item: any) => {
          return (
            <GridItem>
              {item.icon}
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </GridItem>
          );
        })}
      </GridContainer>
    </Container>
  );
};

export default About;
