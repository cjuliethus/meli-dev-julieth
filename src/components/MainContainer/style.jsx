import styled from "styled-components";
import { darkGray, lightGray } from "../../stylesConstants";

export const WrapperMainContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: ${lightGray};
  grid-template-rows: auto 1fr;
`;

export const ContentContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .brand {
    margin: auto;
    padding: 25%;
    text-align:center;
    color:${darkGray};
    font-size: 18px;
    font-weight: 600;
    img{
        opacity: 0.2;
        margin-bottom: 10px;
    }
  }
`;
