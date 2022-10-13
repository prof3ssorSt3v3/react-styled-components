import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  color: rebeccapurple;
`;

const InverseTitle = styled(Title)`
  background-color: rebeccapurple;
  color: white;

  &:hover {
    background-color: cornflowerblue;
  }
`;

const pulse = keyframes`
  from {
    opacity: 0.1;
  }
  to{
    opacity: 1;
  }
`;

const AnimatedTitle = styled(InverseTitle)`
  animation: 1s ${pulse} infinite alternate;
`;

const DynamicTitle = styled.h1`
  color: ${(props) => (props.inverted ? 'black' : 'cornflowerblue')};
  background-color: ${(props) => (props.inverted ? 'white' : 'red')};
  font-size: ${(props) => (props.size ? props.size : '2rem')};
`;

export { Title, InverseTitle, AnimatedTitle, DynamicTitle };
