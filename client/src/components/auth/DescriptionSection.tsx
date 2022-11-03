import Logo from "../../assets/atoms/Logo";
import Charts from "../../assets/svg/Charts";
import { Wrapper, Description, SvgContainer } from "./AuthStyles";

const DescriptionSection = () => {
  return (
    <Wrapper>
      <Description>
        <Logo />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
          facilis, asperiores eos dicta error.
        </p>
      </Description>
      <SvgContainer>
        <Charts />
      </SvgContainer>
    </Wrapper>
  );
};

export default DescriptionSection;
