import styled from "styled-components";
import { darkGray } from "../../stylesConstants";

export const WrapperDetailItem = styled.div`
  ul {
    padding: 16px 16px;
    list-style: none;
    background-color: #eee;
  }
  ul.breadcrumb li {
    display: inline;
    font-size: 14px;
  }
  ul.breadcrumb li + li {
    &::before {
      content: ">";
      padding: 8px;
      color: ${darkGray};
    }
  }
  ul.breadcrumb li {
    color: ${darkGray};
    text-decoration: none;
  }
  ul.breadcrumb li a:hover {
    color: #01447e;
    text-decoration: underline;
  }
`;
