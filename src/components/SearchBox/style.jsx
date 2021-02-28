import styled from 'styled-components';
import { black, lightGray } from '../../stylesConstants';

export const WrapperSearchBox = styled.div`
    width: 100%;
    background-color: white;
    height: 38px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 40px;

    .search-input {
        outline: none;
        border: none;
        padding-left: 10px;
        color: ${black}
    }
`;

export const Icon = styled.div`
    background-color: ${lightGray};
    display: grid;
    align-items: center;
    justify-content: center;
    .icon {
        width: 18;
    }

    &:hover{
        cursor: pointer;
    }
`;