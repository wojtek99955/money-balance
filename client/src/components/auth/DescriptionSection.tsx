import Logo from "../../assets/atoms/Logo";
import Charts from "../../assets/svg/Charts";
import {
  Wrapper,
  Description,
  SvgContainer,
  DescriptionContainer,
} from "./AuthStyles";

const DescriptionSection = () => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
            facilis, asperiores eos dicta error.
          </p>
        </Description>
        <SvgContainer>
          <Charts />
        </SvgContainer>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default DescriptionSection;
