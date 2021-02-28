import styled from "styled-components";
import { yellow } from "../../stylesConstants";

export const WrapperNavHeader = styled.div`
  width: 100%;
  background-color: ${yellow};
  height: 58px;
  display: grid;
`;
export const ContentNav = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50px 1fr;
  padding: 10px 0;
  grid-gap: 24px;
`;
export const Icon = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  
  &:hover{
    cursor: pointer;
  }
`;
