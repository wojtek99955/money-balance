import Charts from "../../assets/svg/Charts";
import { Wrapper, SvgContainer, DescriptionContainer } from "./AuthStyles";

const DescriptionSection = () => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <SvgContainer>
          <Charts />
        </SvgContainer>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default DescriptionSection;
