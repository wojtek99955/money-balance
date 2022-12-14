import {
  Container,
  GridContainer,
  GridItem,
  WalletIcon,
  ChartIcon,
  MedalIcon,
} from "./AboutStyle";

interface Description {
  icon: JSX.Element;
  name: string;
  text: string;
}

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
        {descriptions.map((item: Description) => {
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
