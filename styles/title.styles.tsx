import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1.1rem;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid;
  font-weight: bold;
`;

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Title;
