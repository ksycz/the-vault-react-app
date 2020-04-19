import styled from 'styled-components';

const ButtonIcon = styled.button`
    height: 60px;
    width: 60px;
    background-image: url(${({icon}) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 40%;
    border: none;
    border-radius: 20px;
    background-color: ${({active}) => active ? '#fff' : 'transparent'};
`;

export default ButtonIcon;