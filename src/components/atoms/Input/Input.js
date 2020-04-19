import styled, { css } from 'styled-components';
import searchIcon from '../../../assets/icons/search-solid.svg';

const Input = styled.input`
    padding: 12px 20px;
    border: 1px solid gray;
    border-radius: 20px;

    ${({search}) =>
    search && css`
        padding: 10px 20px 10px 30px;
        font-size: ${({ theme }) => theme.fontSize.s};
        background-image: url(${searchIcon});
        background-position: 8px 50%;
        background-size: 12px;
        background-repeat: no-repeat;
    `
}
`;

export default Input;