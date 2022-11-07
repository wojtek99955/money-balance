import styled from "styled-components";

const Container = styled.span`
  font-size: 1rem;
  color: red;
  display: block;
  margin-bottom: 1rem;
`;

interface Props {
  children?: React.ReactNode;
}

const ValidationErrorMsg = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ValidationErrorMsg;
