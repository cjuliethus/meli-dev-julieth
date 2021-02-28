import styled from "styled-components";
import { black, blueMeli, darkGray, mediumGray } from "../../stylesConstants";

export const WrapperCardDetail = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
`;

export const ImageProduct = styled.div`
  width: 680px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const ProductSummary = styled.div`
  margin: 32px 32px 0 0;
`;
export const TagVendidos = styled.div`
  font-size: 14px;
  color: ${mediumGray};
  margin-bottom: 16px;
`;

export const TitleProduct = styled.div`
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: bold;
  width: 80%;
`;

export const Price = styled.div`
  margin-bottom: 32px;
  font-size: 46px;
  font-weight: bold;
`;

export const ButtonCompra = styled.div`
  background-color: ${blueMeli};
  text-align: center;
  color: white;
  padding: 15px 0;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductDescription = styled.div`
  margin-left: 32px;
`;

export const TitleDescription = styled.div`
  color: ${black};
  padding-top: 54px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
`;
export const Description = styled.div`
  margin-bottom: 32px;
  color: ${darkGray};
`;
