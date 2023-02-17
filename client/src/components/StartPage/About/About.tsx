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
    text: "Take care of your finances. With Money Balance, you have your expenses under control. You know precisely what your money has been spent on.",
    icon: <WalletIcon />,
  },
  {
    name: "Regular summary",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur est esse sunt culpa quidem mollitia dignissimos quam error ex at consequuntur magnam vel veritatis dolore ipsa, fuga minima laborum.",
    icon: <ChartIcon />,
  },
  {
    name: "Set goals",
    text: "Have you ever struggled with saving money? Using Money Balance you can set your financial goals and watch how the progress is going.",
    icon: <MedalIcon />,
  },
];

const About = () => {
  return (
    <Container>
      <h2>About</h2>
      <p>
        Look over the application features and find out how it could help you.
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
