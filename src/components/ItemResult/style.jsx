import styled from "styled-components";
import { black, darkGray, lightGray } from "../../stylesConstants";

export const WrapperItemResult = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: auto 1fr;
  background-color: white;
  grid-gap: 16px;
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 100%;
    padding-top: 20px;
    border-bottom: 1px solid ${lightGray};
    grid-column-start: 1;
    grid-column-end: 3;
  }
  
`;

export const ZonePicture = styled.div`
  width: 180px;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  &:hover{
      cursor: pointer;
  }
`;

export const DescriptionZone = styled.div`
  display: inline-block;
  padding: 16px 0 0 0;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-right: 8px;
  line-height: 1.25;
  color: ${black};
  margin-bottom: 36px;
  .icon {
      margin-left: 10px;
      width: 16px;
      height: 16px;
  }
  &:hover{
      cursor: pointer;
  }
`;
export const Title = styled.div`
  width: 60%;
  font-size: 18px;
  &:hover{
      cursor: pointer;
  }
`;
export const City = styled.div`
  font-size: 12px;
  color: ${darkGray};
`;

export const PrincipalInfo = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;
