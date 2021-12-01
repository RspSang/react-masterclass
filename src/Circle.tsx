import styled from "styled-components";
import React, { useState } from "react";
import { setConstantValue } from "typescript";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProp {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProp) => {
  const [counter, setCounter] = useState<number | string>(0);
  setCounter(2);
  setCounter("hello");
  setCounter(true);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
